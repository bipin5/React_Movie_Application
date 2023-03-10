import { useEffect, useState } from "react";
import "../../assets/scss/index.scss";
import Details from "./Details";
import Sliders from "./Sliders";
import movieApi from "API/movieApi";
import Buttons from "./Buttons";

export default function Banner() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    movieApi()
      .then((movies) => {
        setMovies(movies);
        setSelectedMovie(movies[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movies]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  console.log(movies);

  return (
    <div className="position-relative">
      <div className="m-2 d-flex flex-column align-items-center position-relative banner-container">
        <div className="position-relative m-2 d-flex w-100 flex-column-reverse flex-sm-row movie-banner">
          <Details movie={selectedMovie} />
        </div>
        <div className="d-flex flex-grow-1">
          <Sliders movies={movies} handleMovieClick={handleMovieClick} />
          <Buttons />
        </div>
      </div>
    </div>
  );
}
