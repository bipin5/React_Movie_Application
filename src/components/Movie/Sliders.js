import "../../assets/scss/index.scss";
import { IMAGE_URL } from "constants/constants";
import { NavLink } from "react-router-dom";

export default function Sliders({ movies, handleMovieClick }) {
  console.log(movies);

  return (
    <div className="d-flex position-absolute pt-4 bottom-0 overflow-hidden w-100">
      {movies.slice(0, 10).map((movie) => (
        <NavLink to="/" onClick={() => handleMovieClick(movie)}>
          <div className="me-3 movie-card" key={movie.id}>
            <div className="border border-light">
              <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
              />
              <p className="text-white">{movie.original_title}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
