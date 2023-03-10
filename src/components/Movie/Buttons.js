import { useState } from "react";

export default function Buttons() {
  const [scrollLeft, setScrollLeft] = useState(0);

  const previousHandler = () => {
    const slider = document.querySelector(".banner-container");
    const newScrollLeft = Math.max(scrollLeft - 300, 0);

    setScrollLeft(newScrollLeft);
    slider.scrollLeft = newScrollLeft;
  };

  const nextHandler = () => {
    const slider = document.querySelector(".banner-container");
    const newScrollLeft = Math.min(
      scrollLeft + 300,
      slider.scrollWidth - slider.clientWidth
    );

    setScrollLeft(newScrollLeft);
    slider.scrollLeft = newScrollLeft;
  };

  return (
    <>
      <button
        className="previous-btn position-absolute btn btn-primary"
        onClick={previousHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />{" "}
        </svg>
      </button>
      <button
        className="next-btn position-absolute btn btn-primary"
        onClick={nextHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />{" "}
        </svg>
      </button>
    </>
  );
}
