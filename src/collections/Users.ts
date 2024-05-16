// collections/User.ts
import { CollectionConfig } from 'payload/types';

const User: CollectionConfig = {
  slug: 'users',
  auth: true,
  fields: [
    {
      name: 'username',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Writer',
          value: 'writer',
        },
      ],
      defaultValue: 'writer',
    },
  ],
};

export default User;
