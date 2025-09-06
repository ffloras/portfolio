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
    `Paws and Homes is a web application built using JavaScript, HTML and CSS that connects pet owners needing to rehome their pets with
  those interested in adopting.`,
    `Google Firebase was used for user authentication along with Firestore database, allowing users to create and save their own profiles,
    and browse other users' pet profiles`,
  ],
  link: "https://team26-paws-and-homes.web.app/",
  github: "https://github.com/ffloras/1800_202510_BBY26",
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
