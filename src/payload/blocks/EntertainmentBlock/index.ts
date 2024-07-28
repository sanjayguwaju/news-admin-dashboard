import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const EntertainmentBlock: Block = {
  slug: 'entertainment-block',
  labels: {
    singular: 'Entertainment',
    plural: 'Entertainments',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Entertainment Posts',
      relationTo: 'single-post',
      hasMany: true,
    },
  ],
  
};