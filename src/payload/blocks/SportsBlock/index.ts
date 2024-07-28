import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const SportsBlock: Block = {
  slug: 'sport-block',
  labels: {
    singular: 'Sport',
    plural: 'Sports',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Sport Posts',
      relationTo: 'single-post',
      hasMany: true,
    },
  ],
  
};