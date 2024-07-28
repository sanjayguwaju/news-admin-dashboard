import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const TechnologyBlock: Block = {
  slug: 'technology-block',
  labels: {
    singular: 'Technology',
    plural: 'Technologies',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Technology Posts',
      relationTo: 'single-post',
      hasMany: true,
    },
  ],
  
};