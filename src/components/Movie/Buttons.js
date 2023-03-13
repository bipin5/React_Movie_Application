import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Buttons({ scrollLeft, setScrollLeft }) {
  const sliderLength = 10;

  const previousHandler = () => {
    const slider = document.querySelector(".slider-container");

    setScrollLeft(scrollLeft === 0 ? sliderLength - 1 : scrollLeft - 1);
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const nextHandler = () => {
    const slider = document.querySelector(".slider-container");

    setScrollLeft(scrollLeft === sliderLength - 1 ? 0 : scrollLeft + 1);
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  useEffect(() => {
    const slider = document.querySelector(".slider-container");

    slider.childNodes.length &&
      slider.childNodes[scrollLeft].scrollIntoView({ behavior: "smooth" });
  }, [scrollLeft]);

  return (
    <div>
      <button
        className={`previous-btn position-absolute btn btn-primary`}
        onClick={previousHandler}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="next-btn position-absolute btn btn-primary"
        onClick={nextHandler}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
