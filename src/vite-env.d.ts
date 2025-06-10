/// <reference types="vite/client" />

declare module "*.json" {
  const value: {
    collegeCode: string;
    college: string;
    about: string;
    events: Array<{
      year: number;
      eventDetails: Array<{
        month: string;
        date: string;
        head: string;
        para: string;
        img: string;
      }>;
    }>;
    gallery: {
      row1: Array<{ image: string }>;
      row2: Array<{ image: string }>;
    };
    statistics: {
      studentsCount: number;
      activeMembers: number;
      InterestGroups: number;
      karmaEarned: number;
      rank: number;
    };
    team: {
      [key: string]: {
        name: string;
        image: string;
      };
    };
    discordLink: string;
    whatsAppLink: string;
    email: string;
    linkedIn: string;
    instagram: string;
    X: string;
    youtube: string;
  };
  export default value;
}
