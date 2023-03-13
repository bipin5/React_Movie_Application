import "assets/scss/index.scss";
import { IMAGE_URL } from "constants/constants";
import { useEffect, useState } from "react";
import MovieApi from "API/movieApi";

export default function Sliders({ handleClick, scrollLeft, setScrollLeft }) {
  const [movies, setMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div className="d-flex position-absolute pt-4 bottom-0 overflow-hidden w-100 slider-container">
      {movies.slice(0, 10).map((movie, index) => (
        <div
          className={`me-4 movie-card ${
            scrollLeft === index ? "active-card border border-light" : ""
          }`}
          key={movie.id}
        >
          <div
            className={`border border-light border-opacity-25 image-container ${
              isHovered ? "movie-card" : ""
            } `}
            onClick={() => {
              handleClick(movie);
              setScrollLeft(index);
            }}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            <img
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid"
            />
            <p className="text-white m-2">{movie.original_title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
