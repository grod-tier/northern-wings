export default {
  name: 'galleryPhoto',
  title: 'Gallery Photo',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'takenAt',
      title: 'Date taken',
      type: 'date',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Monarch Waystation, Michigan"',
    },
  ],
  preview: {
    select: { title: 'caption', media: 'image', date: 'takenAt' },
    prepare({ title, media, date }) {
      return { title: title || 'Untitled photo', media, subtitle: date || '' };
    },
  },
};
