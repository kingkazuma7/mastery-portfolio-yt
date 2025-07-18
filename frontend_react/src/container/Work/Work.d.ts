declare module '*.jsx';

interface Work {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: {
    asset: {
      url: string;
    };
  };
  previewImages?: {
    asset: {
      url: string;
    };
  }[];
  previewVideo?: {
    asset: {
      url: string;
    };
  };
  tags: string[];
  details: any[]; // Sanityのblock contentの型
  blurEffect?: boolean;
  isNew?: boolean;
  year: string;
}

declare const WorkComponent: React.FC;

export default WorkComponent;
export type { Work };
