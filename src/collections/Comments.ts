// collections/Comment.ts
import { CollectionConfig } from 'payload/types';

const Comment: CollectionConfig = {
  slug: 'comments',
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'article',
      type: 'relationship',
      relationTo: 'articles',
      required: true,
    },
    {
      name: 'postedDate',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
};

export default Comment;
