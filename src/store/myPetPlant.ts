import myPetPlantImg from "../assets/myPetPlant/myPetPlantBg.png";
import myPetPlantVid1 from "../assets/myPetPlant/myPetPlantVid1.mp4";
import myPetPlantVid2 from "../assets/myPetPlant/myPetPlantVid2.mp4";
import { type VideoScrollerType } from "../components/VideoScroller";
import { type ProjectsPageType } from "./projects";

export const MyPlantPlantInfo: ProjectsPageType = {
  img: myPetPlantImg,
  imgAlt: "My Pet Plant Mobile App Logo",
  title: "My Pet Plant",
  projectType: "Personal Project",
  descriptions: [
    `My Pet Plant is an android mobile app created using React Native with Expo and Typescript that helps users 
    keep track of their plant watering schedule. Users will also receive notification reminders when it's time to 
    water their plants. Zustand and Async Storage was used for state management and storing users' plant data in phone storage.`,
    `This app is currently in internal testing phase for Google Play Store. If you are interested
    in joining, please send an email (gmail required) to fsu8@my.bcit.ca.`,
  ],
  github: "https://github.com/ffloras/myPetPlant",
};

export const plantVideos: VideoScrollerType = {
  videos: [
    {
      src: myPetPlantVid1,
      caption: "Add a new plant and set its watering schedule",
    },
    {
      src: myPetPlantVid2,
      caption: "Receive notification reminders to water your plants",
    },
  ],
  width: 250,
  widthSmall: 250,
  height: 450,
  heightSmall: 450,
};
