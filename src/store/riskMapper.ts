import riskMapperImg from "../assets/riskMapper/RiskMapper.png";
import type { ProjectsPageType } from "./projects";
import riskMapperVid1 from "../assets/riskMapper/riskMapperVid1.mp4";
import riskMapperVid2 from "../assets/riskMapper/riskMapperVid2.mp4";
import riskMapperVid3 from "../assets/riskMapper/riskMapperVid3.mp4";
import type { VideoScrollerType } from "../components/VideoScroller";

export const RiskMapperInfo: ProjectsPageType = {
  img: riskMapperImg,
  imgAlt: "Risk Mapper Web App Logo",
  title: "Risk Mapper",
  projectType: "BCIT Projects 2",
  descriptions: [
    `Risk Mapper is a web application created using Javascript and EJS that shows users the climate risks in their area.
    It uses Mapbox and MscGeomet API to implement a map with visual overlay of climate data, as well as Weather API
    to detect climate alerts. Backend and session-based authentication was implemented using Node JS and Express with a MongoDB database.`,
  ],
  link: "https://riskmapper.onrender.com/",
  github: "https://github.com/ffloras/2800-202510-BBY01",
};

export const riskMapperVideos: VideoScrollerType = {
  videos: [
    {
      src: riskMapperVid1,
      caption: "Search a location to view its climate risk and adaptation tips",
    },
    {
      src: riskMapperVid2,
      caption: "View climate overlays for your location",
    },
    {
      src: riskMapperVid3,
      caption: "Save a location to receive email climate alerts",
    },
  ],
  width: 600,
  widthSmall: 400,
  height: 450,
  heightSmall: 300,
};
