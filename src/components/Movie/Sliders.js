import "assets/scss/index.scss";
import { IMAGE_URL } from "constants/constants";
import { useEffect, useState } from "react";
import MovieApi from "API/movieApi";

export default function Sliders({ handleClick }) {
  const [movies, setMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sliderLength = 10;

  useEffect(() => {
    const getLatestMovies = async () => {
      try {
        const response = await MovieApi();

        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getLatestMovies();
  }, []);

  useEffect(() => {
    handleClick(movies[0]);
  }, [movies]);

  const onMouseEnterHandler = () => {
    setIsHovered(true);
  };

  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };

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
    <div className="d-flex position-absolute pt-4 bottom-0 overflow-hidden w-100 slider-container">
      {movies.slice(0, 10).map((movie, index) => (
        <div className="me-3 movie-card" key={movie.id}>
          <div
            className={`border border-light image-container ${
              isHovered ? "movie-card-hover" : ""
            } ${scrollLeft === index ? "movie-card-hover" : ""}`}
            onClick={() => handleClick(movie)}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            <img
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid"
            />
            <p className="text-white">{movie.original_title}</p>
          </div>
        </div>
      ))}
      <button
        className={`previous-btn position-absolute btn btn-primary ${
          scrollLeft === 1 ? "movie-card-hover" : ""
        }`}
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
    </div>
  );
}
