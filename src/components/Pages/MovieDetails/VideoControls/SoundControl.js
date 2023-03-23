import { useState } from "react";

import "assets/scss/index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

export default function SoundControl({ videoRef }) {
  const [sound, setSound] = useState(true);
  const [volume, setVolume] = useState(1);

  const soundHandler = () => {
    if (sound) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    } else {
      videoRef.current.muted = false;
      videoRef.current.volume = volume;
    }
    setSound(!sound);
  };

  const soundChangeHandler = (event) => {
    videoRef.current.volume = event.target.value;
    setVolume(event.target.value);
  };

  return (
    <div className="volume-control position-relative d-inline-block">
      <button
        className="btn border-0"
        onClick={() => {
          soundHandler();
        }}
      >
        {sound ? (
          <FontAwesomeIcon icon={faVolumeHigh} />
        ) : (
          <FontAwesomeIcon icon={faVolumeMute} />
        )}
      </button>
      <input
        type="range"
        className="d-none volume-bar position-absolute"
        min="0"
        max="1"
        step="0.1"
        onChange={(e) => soundChangeHandler(e)}
      ></input>
    </div>
  );
}
