import theEscapeImg from "../assets/theEscape/theEscape.png";
import theEscapeVid1 from "../assets/theEscape/theEscapeVid1.mp4";
import theEscapeVid2 from "../assets/theEscape/theEscapeVid2.mp4";
import theEscapeVid3 from "../assets/theEscape/theEscapeVid3.mp4";
import theEscapeVid4 from "../assets/theEscape/theEscapeVid4.mp4";
import type { ProjectsPageType } from "./projects";
import { type VideoScrollerType } from "../components/VideoScroller";

export const TheEscapeInfo: ProjectsPageType = {
  img: theEscapeImg,
  imgAlt: "The Escape Browser Game Logo",
  title: "The Escape",
  projectType: "Personal Project",
  descriptions: [
    `The Escape is an escape room browser game made using React and Typescript. 
    Users can explore rooms and challenge a variety of puzzles. It currently uses Context API
    for state management.`,
    `Game development is in progress.`,
  ],

  github: "https://github.com/ffloras/esc_room_proto",
};

export const theEscapeVideos: VideoScrollerType = {
  videos: [
    {
      src: theEscapeVid1,
      caption: "Explore and solve a variety of puzzles (1/4)",
    },
    {
      src: theEscapeVid2,
      caption: "Explore and solve a variety of puzzles (2/4)",
    },
    {
      src: theEscapeVid3,
      caption: "Explore and solve a variety of puzzles (3/4)",
    },
    {
      src: theEscapeVid4,
      caption: "Explore and solve a variety of puzzles (4/4)",
    },
  ],
  width: 600,
  widthSmall: 400,
  height: 450,
  heightSmall: 300,
};
