import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';

export const sanity = projectId
  ? createClient({ projectId, dataset, useCdn: true, apiVersion: '2024-01-01' })
  : null;

export const sanityWrite = projectId && process.env.SANITY_WRITE_TOKEN
  ? createClient({ projectId, dataset, useCdn: false, apiVersion: '2024-01-01', token: process.env.SANITY_WRITE_TOKEN })
  : null;

export function imageUrl(ref, width = 800) {
  if (!ref || !projectId) return '';
  // Sanity image URL format: https://cdn.sanity.io/images/{projectId}/{dataset}/{ref}
  const id = ref.replace('image-', '').replace(/-(\w+)$/, '.$1');
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}?w=${width}&auto=format`;
}

export async function getJournalPosts() {
  if (!sanity) return [];
  return sanity.fetch(
    `*[_type == "journalPost"] | order(publishedAt desc) {
      title, slug, publishedAt, excerpt,
      "mainImage": mainImage.asset._ref
    }`
  );
}

export async function getJournalPost(slug) {
  if (!sanity) return null;
  return sanity.fetch(
    `*[_type == "journalPost" && slug.current == $slug][0] {
      title, slug, publishedAt, excerpt,
      "mainImage": mainImage.asset._ref,
      body
    }`,
    { slug }
  );
}

export async function getGalleryPhotos() {
  if (!sanity) return [];
  return sanity.fetch(
    `*[_type == "galleryPhoto"] | order(takenAt desc) {
      caption, takenAt, location,
      "image": image.asset._ref
    }`
  );
}
