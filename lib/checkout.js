import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

const KIT_NAME = process.env.STRIPE_KIT_NAME || 'Pollinator Garden Starter Kit';
const KIT_DESCRIPTION = 'Native seed mix, biodegradable planting materials, and a step-by-step planting & monarch life-cycle guide. Covers ~25 sq ft of native habitat.';
const KIT_PRICE_CENTS = Number(process.env.STRIPE_KIT_PRICE_CENTS || 2800);

/** Whether Stripe has been configured with a secret key. */
export function isStripeConfigured() {
  return Boolean(stripe);
}

/**
 * Create a Stripe Checkout Session for the Pollinator Garden Kit.
 * Uses inline price_data so no product/price needs to be pre-created in the Stripe dashboard.
 */
export async function createCheckoutSession({ quantity = 1, siteUrl }) {
  if (!stripe) throw new Error('Stripe is not configured (set STRIPE_SECRET_KEY)');

  const qty = Math.max(1, Math.min(10, Number(quantity) || 1));

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: KIT_PRICE_CENTS,
          product_data: {
            name: KIT_NAME,
            description: KIT_DESCRIPTION,
          },
        },
        quantity: qty,
      },
    ],
    shipping_address_collection: { allowed_countries: ['US'] },
    success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/#kits`,
  });

  return session;
}

/** Verify and parse a Stripe webhook event from the raw request body. */
export function constructWebhookEvent(rawBody, signature) {
  if (!stripe) throw new Error('Stripe is not configured (set STRIPE_SECRET_KEY)');
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) throw new Error('STRIPE_WEBHOOK_SECRET is not configured');
  return stripe.webhooks.constructEvent(rawBody, signature, secret);
}

let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  if (!process.env.SMTP_HOST) return null;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  });
  return transporter;
}

/**
 * Send an order notification email for a completed Checkout Session.
 * No-op (with a console warning) if SMTP / ORDER_NOTIFICATION_EMAIL aren't configured.
 */
export async function sendOrderNotification(session) {
  const to = process.env.ORDER_NOTIFICATION_EMAIL;
  const tx = getTransporter();
  if (!to || !tx) {
    console.warn('Order notification skipped: configure SMTP_HOST and ORDER_NOTIFICATION_EMAIL in .env');
    return;
  }

  const details = session.customer_details || {};
  const shipping = session.shipping_details || details;
  const addr = shipping.address || {};
  const addressLines = [
    addr.line1,
    addr.line2,
    [addr.city, addr.state, addr.postal_code].filter(Boolean).join(', '),
    addr.country,
  ].filter(Boolean);

  const amount = ((session.amount_total || 0) / 100).toFixed(2);
  const currency = (session.currency || 'usd').toUpperCase();

  const text = [
    'New Pollinator Kit order!',
    '',
    `Customer: ${shipping.name || details.name || 'Unknown'}`,
    `Email: ${details.email || session.customer_email || 'unknown'}`,
    `Amount: $${amount} ${currency}`,
    `Stripe session: ${session.id}`,
    '',
    'Shipping address:',
    ...(addressLines.length ? addressLines : ['(not provided)']),
  ].join('\n');

  await tx.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    subject: `New order — Pollinator Kit ($${amount})`,
    text,
  });
}
