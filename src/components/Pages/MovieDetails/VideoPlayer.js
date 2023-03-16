import { useState, useRef } from "react";

import "assets/scss/index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

import SoundControl from "./VideoControls/SoundControl";
import PlayButtonControl from "./VideoControls/PlayButtonControl";

export default function VideoPlayer() {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;

    setProgress(progress);
  };

  const onFullScreenHandler = () => {
    if (!isFullScreen) {
      videoRef.current.requestFullscreen();
    } else {
      videoRef.current.exitFullscreen();
    }
    setFullScreen(isFullScreen);
  };

  return (
    <div className="video-container mt-4 px-5">
      <video
        className="w-100"
        ref={videoRef}
        onTimeUpdate={() => handleProgress()}
      >
        <source src="http://techslides.com/demos/sample-videos/small.mp4" />
      </video>
      <div className="d-flex video-controls bg-light px-2 justify-content-between align-items-center">
        <PlayButtonControl
          progress={progress}
          videoRef={videoRef}
          setProgress={setProgress}
        />
        <SoundControl videoRef={videoRef} />
        <div role="button" onClick={() => onFullScreenHandler()}>
          <FontAwesomeIcon icon={faExpand} />
        </div>
      </div>
    </div>
  );
}
