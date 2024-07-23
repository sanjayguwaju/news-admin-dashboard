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
      // Pass the Lexical editor here and override base settings as necessary
      editor: lexicalEditor({})
    }
  ],
};

export default SinglePost;