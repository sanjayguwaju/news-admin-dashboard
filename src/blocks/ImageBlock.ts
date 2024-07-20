import { Block } from 'payload/types';

const ImageBlock: Block = {
  slug: 'image-block',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
};

export default ImageBlock;
