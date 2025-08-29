import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

export type VideoScrollerType = {
  videos: string[];
  width?: number;
  height?: number;
};

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const VideoScroller = ({ videos, width, height }: VideoScrollerType) => {
  const [videoIndex, setVideoIndex] = useState<number>(0);
  const [inTransition, setInTransition] = useState<boolean>(false);
  const videoWidth = width ? width : 300;

  const handleChangeVideo = async (direction: "left" | "right") => {
    setInTransition(true);
    await delay(300);
    if (direction === "right") {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }
    if (direction === "left") {
      const length = videos.length;
      setVideoIndex((prev) => (prev + length - 1) % length);
    }
    setInTransition(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-video-outer-container">
      <div
        className="project-video-arrow"
        onClick={() => handleChangeVideo("left")}
      >
        <MdNavigateBefore size={80} color="#7d7d7dff" />
      </div>
      <div className="project-video-inner-container">
        <div
          className="project-video-transition"
          style={{ opacity: inTransition ? 1 : 0, width: `${videoWidth}px` }}
        ></div>
        <video
          className="project-video"
          src={videos[videoIndex]}
          width={videoWidth}
          controls
        />
      </div>
      <div
        className="project-video-arrow"
        onClick={() => handleChangeVideo("right")}
      >
        <MdNavigateNext size={80} color="#7d7d7dff" />
      </div>
    </div>
  );
};

export default VideoScroller;
