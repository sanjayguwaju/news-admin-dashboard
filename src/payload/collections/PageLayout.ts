import { CollectionConfig } from 'payload/types';

const PageLayout: CollectionConfig = {
  slug: 'pages-layout',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'layoutType',
          type: 'select',
          options: [
            { label: 'Full Width', value: 'fullWidth' },
            { label: 'Two Columns', value: 'twoColumns' },
          ],
          required: true,
        },
        {
          name: 'blocks',
          type: 'blocks',
          required: true,
          blocks: [
            {
              slug: 'hero',
              fields: [
                {
                  name: 'headline',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subheadline',
                  type: 'text',
                },
                {
                  name: 'backgroundImage',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            {
              slug: 'content',
              fields: [
                {
                  name: 'content',
                  type: 'richText',
                },
              ],
            },
            {
              slug: 'gallery',
              fields: [
                {
                  name: 'images',
                  type: 'array',
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default PageLayout;
