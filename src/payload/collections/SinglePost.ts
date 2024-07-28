import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload/types';

const SinglePost: CollectionConfig = {
  slug: 'single-post',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read SinglePost
  },
  fields: [
    {
      name: 'title',
      label: 'Post Title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}), // Pass the Lexical editor here and override base settings as necessary
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar', // Display in the sidebar
      },
    },
    {
      name: 'publishDate',
      label: 'Publish Date',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar', // Display in the sidebar
      },
    },
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media', // assuming you have a 'media' collection to relate to
      required: true,
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories', // a ssuming you have a 'category' collection
      hasMany: true, // Allow multiple selections
      required: true,
    }
  ],
};

export default SinglePost;