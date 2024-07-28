import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const SocialBlock: Block = {
  slug: 'social-block',
  labels: {
    singular: 'Social',
    plural: 'Socials',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Social Posts',
      relationTo: 'single-post',
      hasMany: true,
    },
  ],
  
};