import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

type VideoType = {
  src: string;
  caption: string;
};

export type VideoScrollerType = {
  videos: VideoType[];
  width: number;
  widthSmall: number;
  height: number;
  heightSmall: number;
};

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const VideoScroller = ({
  videos,
  width,
  height,
  widthSmall,
  heightSmall,
}: VideoScrollerType) => {
  const [videoIndex, setVideoIndex] = useState<number>(0);
  const [inTransition, setInTransition] = useState<boolean>(false);
  const [isMidScreen, setIsMidScreen] = useState(window.innerWidth < 900);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650);

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
    const handleResize = () => {
      setIsMidScreen(window.innerWidth < 900);
      setIsSmallScreen(window.innerWidth < 650);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-video-outer-container">
      {!isMidScreen && (
        <div
          className="project-video-arrow"
          onClick={() => handleChangeVideo("left")}
        >
          <MdNavigateBefore size={80} color="#7d7d7dff" />
        </div>
      )}
      <div className="project-video-inner-container">
        <div
          className="project-video-caption-container"
          style={{
            opacity: inTransition ? 0 : 1,
          }}
        >
          {isMidScreen && (
            <div
              className="project-video-arrow"
              onClick={() => handleChangeVideo("left")}
            >
              <MdNavigateBefore size={50} color="#7d7d7dff" />
            </div>
          )}
          <p className="project-video-caption">{videos[videoIndex].caption}</p>
          {isMidScreen && (
            <div
              className="project-video-arrow"
              onClick={() => handleChangeVideo("right")}
            >
              <MdNavigateNext size={50} color="#7d7d7dff" />
            </div>
          )}
        </div>
        <div
          className="project-video-transition"
          style={{
            opacity: inTransition ? 1 : 0,
            width: `${isSmallScreen ? widthSmall : width}px`,
          }}
        ></div>

        <video
          className="project-video"
          src={videos[videoIndex].src}
          width={isSmallScreen ? widthSmall : width}
          height={isSmallScreen ? heightSmall : height}
          controls
          tabIndex={-1}
        />
      </div>
      {!isMidScreen && (
        <div
          className="project-video-arrow"
          onClick={() => handleChangeVideo("right")}
        >
          <MdNavigateNext size={80} color="#7d7d7dff" />
        </div>
      )}
    </div>
  );
};

export default VideoScroller;
