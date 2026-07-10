import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const NAVBAR_PATH = join(__dirname, '../templates/navbar.html');

let cached = null;

export async function getNavHtml() {
  if (!cached) cached = await readFile(NAVBAR_PATH, 'utf8');
  return cached;
}

// Call this whenever navbar.html changes to bust the cache
export function clearNavCache() { cached = null; }

export async function injectNav(html) {
  const nav = await getNavHtml();
  return html.replace('<!-- NAVBAR -->', nav.trim());
}
