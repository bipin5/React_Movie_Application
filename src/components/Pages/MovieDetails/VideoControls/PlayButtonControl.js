import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayButtonControl({ progress, videoRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div role="button" onClick={() => handlePlay()} className="mx-2">
        {!isPlaying || progress === 100 ? (
          <FontAwesomeIcon icon={faPlay} />
        ) : (
          <FontAwesomeIcon icon={faPause} />
        )}
      </div>
      <input
        type="range"
        className="progress-bar"
        min="0"
        max="100"
        value={progress}
      ></input>
    </>
  );
}
