import { Block } from '../payload-types';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';

const SectionBlock: Block = {
  slug: 'section-block',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        TextBlock,
        ImageBlock,
        // Add other nested blocks
      ],
    },
  ],
};

export default SectionBlock;
