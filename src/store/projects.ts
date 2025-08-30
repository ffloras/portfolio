import myPetPlantImg from "../assets/myPetPlant/myPetPlantBg.png";
import riskMapperImg from "../assets/riskMapper/RiskMapper.png";
import theEscapeImg from "../assets/theEscape/theEscape.png";
import pawsAndHomesImg from "../assets/pawsAndHomes/pawsAndHomes.png";

export type ProjectsPageType = {
  img: string;
  imgAlt: string;
  title: string;
  projectType: string;
  descriptions: string[];
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
    description: "Escape room browser game",
    img: theEscapeImg,
    link: "/TheEscape",
  },
  {
    title: "Paws And Homes",
    description: "Pet adoption web app",
    img: pawsAndHomesImg,
    link: "/PawsAndHomes",
  },
];
