// collections/Category.ts
import { CollectionConfig } from 'payload/types';

const Category: CollectionConfig = {
  slug: 'categories',
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
