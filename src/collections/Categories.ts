// collections/Category.ts
import { CollectionConfig } from 'payload/types';

const Category: CollectionConfig = {
  slug: 'categories',
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
};

export default Category;
