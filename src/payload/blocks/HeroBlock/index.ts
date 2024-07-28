import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const HeroBlock: Block = {
  slug: 'hero-block',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Hero Posts',
      relationTo: 'single-post',
      hasMany: true,
    },
  ],
};