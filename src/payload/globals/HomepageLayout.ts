import { GlobalConfig } from 'payload/types';
import { HeroBlock } from '../blocks/HeroBlock';
import { RecentBlock } from '../blocks/RecentBlock';
import { SportsBlock } from '../blocks/SportsBlock';
import { NationBlock } from '../blocks/NationalBlock';
import { PoliticsBlock } from '../blocks/PoliticsBlock';
import { SocialBlock } from '../blocks/SocialBlock';
import { TechnologyBlock } from '../blocks/TechnologyBlock';
import { EntertainmentBlock } from '../blocks/EntertainmentBlock';
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
        SportsBlock,
        NationBlock,
        PoliticsBlock,
        SocialBlock,
        TechnologyBlock,
        EntertainmentBlock,
      ],
    },
  ],
};

export default HomepageLayout;