import pawsAndHomesImg from "../assets/pawsAndHomes/pawsAndHomes.png";
import type { ProjectsPageType } from "./projects";
import pahVid1 from "../assets/pawsAndHomes/pahVid1.mp4";
import pahVid2 from "../assets/pawsAndHomes/pahVid2.mp4";
import pahVid3 from "../assets/pawsAndHomes/pahVid3.mp4";
import type { VideoScrollerType } from "../components/VideoScroller";

export const PawsAndHomesInfo: ProjectsPageType = {
  img: pawsAndHomesImg,
  imgAlt: "Paws and Homes Web App Logo",
  title: "Paws and Homes",
  projectType: "BCIT Projects 1",
  descriptions: [
    `Paws and Homes is a web app that connects pet owners needing to rehome their pets with
  those interested in adopting.`,
    `This app was built using HTML, JavaScript and CSS. Authentication and database was implemented using
  Google Firebase and Firestore`,
  ],
  link: "https://team26-paws-and-homes.web.app/",
  github: "https://github.com/ffloras/2800-202510-BBY01",
};

export const pawsAndHomesVideos: VideoScrollerType = {
  videos: [
    {
      src: pahVid1,
      caption: "Create and post a profile of your pet",
    },
    {
      src: pahVid2,
      caption: "View profiles of pets for adoption",
    },
    {
      src: pahVid3,
      caption: "Contact and connect with pet owners",
    },
  ],
  width: 600,
  widthSmall: 400,
  height: 450,
  heightSmall: 300,
};
