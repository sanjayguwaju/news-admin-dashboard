import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const PoliticsBlock: Block = {
  slug: 'politics-block',
  labels: {
    singular: 'Politic',
    plural: 'Politics',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Politic Posts',
      relationTo: 'single-post',
      hasMany: true,
    },
  ],
  
};