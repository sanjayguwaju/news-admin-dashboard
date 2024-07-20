// collections/Article.ts
import { CollectionConfig } from 'payload/types';
import generateSlug from '../utilities/generateSlug';
import SectionBlock from '../blocks/SectionBlock';

const Article: CollectionConfig = {
  slug: 'articles',
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type:  'text',
      required: true,
      unique: true
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
      SectionBlock
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      defaultValue: () => new Date(),
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'caption',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data.title && !data.slug) {
          data.slug = generateSlug(data.title);
        }
      },
    ],
  },
};

export default Article;
