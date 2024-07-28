import { CollectionConfig } from 'payload/types';

const HeroSection: CollectionConfig = {
  slug: 'hero-section',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Post Title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media', // assuming you have a 'media' collection to relate to
      required: false,
    },
  ],
};

export default HeroSection;