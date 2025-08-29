import myPetPlantImg from "../assets/myPetPlantBg.png";
import riskMapperImg from "../assets/RiskMapper.png";
import theEscapeImg from "../assets/theEscape.png";

export type ProjectsPageType = {
  img: string;
  imgAlt: string;
  title: string;
  projectType: string;
  description: string;
  subDescription?: string;
  link?: string;
  github?: string;
};

export type ProjectButtonType = {
  title: string;
  description: string;
  img: string;
  link: string;
};

export const projectList: ProjectButtonType[] = [
  {
    title: "My Pet Plant",
    description: "Plant water scheduling mobile app",
    img: myPetPlantImg,
    link: "/MyPetPlant",
  },
  {
    title: "Risk Mapper",
    description: "Climate awareness web app",
    img: riskMapperImg,
    link: "/RiskMapper",
  },
  {
    title: "The Escape",
    description: "Escape Room Browser Game",
    img: theEscapeImg,
    link: "/TheEscape",
  },
  {
    title: "MyPetPlant",
    description: "Plant water scheduling mobile app",
    img: myPetPlantImg,
    link: "/MyPetPlant",
  },
];

export const MyPlantPlantInfo: ProjectsPageType = {
  img: myPetPlantImg,
  imgAlt: "My Pet Plant Mobile App Logo",
  title: "My Pet Plant",
  projectType: "Personal Project",
  description: `My Pet Plant is an android mobile app that helps users keep track of their plant watering schedule.
  Users will also receive notifications when it's time to water their plants.`,
  subDescription: `This app is currently in internal testing phase. If you are interested
  in testing, please send an email (including your gmail) to fsu8@my.bcit.ca.`,
  github: "https://github.com/ffloras/myPetPlant",
};

export const RiskMapperInfo: ProjectsPageType = {
  img: riskMapperImg,
  imgAlt: "Risk Mapper Web App Logo",
  title: "Risk Mapper",
  projectType: "BCIT Projects 2",
  description: `RiskMapper is a climate risk visualization web application that enables users to identify, understand, and share information 
  about environmental threats in their region. Using real-time geospatial data from official sources, the app visualizes environmental risks 
  through interactive map layers and provides actionable climate adaptation tips.`,
  subDescription: `This app is built using Node JS and express, with EJS, JavaScript and CSS, and a MongoDB database.`,
  link: "https://riskmapper.onrender.com/",
  github: "https://github.com/ffloras/2800-202510-BBY01",
};

export const TheEscapeInfo: ProjectsPageType = {
  img: theEscapeImg,
  imgAlt: "The Escape Browser Game Logo",
  title: "The Escape",
  projectType: "Personal Project",
  description: `The Escape is an escape room browser game made using React and Typescript. Users can challenge a variety of puzzles
  and uncover the mysteries that they are trapped within.`,
  subDescription: `Game development is currently in progress.`,
  link: "https://riskmapper.onrender.com/",
  github: "https://github.com/ffloras/2800-202510-BBY01",
};
