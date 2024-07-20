import { Block } from 'payload/types';

const TextBlock: Block = {
  slug: 'text-block',
  fields: [
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
  ],
};

export default TextBlock;
