import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const RecentBlock: Block = {
  slug: 'recent-block',
  labels: {
    singular: 'Recent',
    plural: 'Recents',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Recent Posts',
      relationTo: 'single-post',
      hasMany: true,
    },
  ],
  
};