import { createClient } from '@sanity/client';

const PROJECT_ID = 'ryf1dyhh';
const DATASET = 'production';

export const sanityClient = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
});

export function imageUrl(ref, width = 800) {
  if (!ref) return '';
  const id = ref.replace('image-', '').replace(/-(\w+)$/, '.$1');
  return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}?w=${width}&auto=format`;
}

export async function getJournalPosts() {
  return sanityClient.fetch(
    `*[_type == "journalPost"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt,
      "mainImage": mainImage.asset._ref
    }`
  );
}

export async function getJournalPost(slug) {
  return sanityClient.fetch(
    `*[_type == "journalPost" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, excerpt,
      "mainImage": mainImage.asset._ref,
      body
    }`,
    { slug }
  );
}

export async function getGalleryPhotos() {
  return sanityClient.fetch(
    `*[_type == "galleryPhoto"] | order(takenAt desc) {
      _id, caption, takenAt, location,
      "image": image.asset._ref
    }`
  );
}
