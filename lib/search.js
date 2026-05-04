import './env.js';

export async function searchBusinesses(zipcode, niche) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) throw new Error('GOOGLE_PLACES_API_KEY not set in .env');

  const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.websiteUri,places.rating,places.userRatingCount,places.types,places.googleMapsUri,places.photos',
    },
    body: JSON.stringify({ textQuery: `${niche} near ${zipcode}`, maxResultCount: 20, languageCode: 'en' }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || 'Places API error');
  }

  const data = await response.json();
  const places = data.places || [];

  return places
    .filter(p => p.websiteUri)
    .slice(0, 10)
    .map(p => ({
      name: p.displayName?.text || 'Unknown',
      address: p.formattedAddress || '',
      website: p.websiteUri,
      rating: p.rating || null,
      reviewCount: p.userRatingCount || 0,
      types: p.types?.slice(0, 3) || [],
      mapsUrl: p.googleMapsUri || null,
      photo: p.photos?.[0]
        ? `https://places.googleapis.com/v1/${p.photos[0].name}/media?maxWidthPx=400&key=${apiKey}`
        : null,
    }));
}
