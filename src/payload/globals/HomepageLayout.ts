import { GlobalConfig } from 'payload/types';
import { CallToAction } from '../blocks/CallToAction';
import { Content } from '../blocks/Content';
import { MediaBlock } from '../blocks/MediaBlock';
import { HeroBlock } from '../blocks/HeroBlock';
import { RecentBlock } from '../blocks/RecentBlock';
// Import other blocks as needed

const HomepageLayout: GlobalConfig = {
  slug: 'homepage-layout',
  access: {
    read: (): boolean => true, // Everyone can read SinglePost
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'sections',
      label: 'Page Sections',
      type: 'blocks',
      blocks: [
        HeroBlock,
        RecentBlock,
      ],
    },
  ],
};

export default HomepageLayout;