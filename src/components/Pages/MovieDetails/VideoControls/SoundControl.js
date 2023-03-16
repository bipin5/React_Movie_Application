import { useState } from "react";

import "assets/scss/index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

export default function SoundControl({ videoRef }) {
  const [sound, setSound] = useState(true);

  const soundHandler = () => {
    if (sound) {
      videoRef.current.muted = true;
    } else {
      videoRef.current.muted = false;
    }
    setSound(!sound);
  };

  return (
    <div
      className="volume-control position-relative p-1"
      onClick={() => {
        soundHandler();
      }}
    >
      <div className="sound-button" role="button">
        {sound ? (
          <>
            <FontAwesomeIcon icon={faVolumeHigh} />
            <input
              type="range"
              className="volume-bar position-absolute"
              min="0"
              max="1"
              step="0.1"
            ></input>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faVolumeMute} />
            <input
              type="range"
              className="volume-bar position-absolute"
              min="0"
              max="1"
              step="0.1"
            ></input>
          </>
        )}
      </div>
    </div>
  );
}
