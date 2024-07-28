import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const NationBlock: Block = {
  slug: 'national-block',
  labels: {
    singular: 'National',
    plural: 'Nationals',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select National Posts',
      relationTo: 'single-post',
      hasMany: true,
    },
  ],
  
};