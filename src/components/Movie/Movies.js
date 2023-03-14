import { useEffect, useState } from "react";

import "assets/scss/index.scss";

import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/navbar";

import MovieApi from "API/movieApi";

import MovieCard from "./MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const getLatestMovies = async () => {
    try {
      const results = await MovieApi();

      setMovies(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLatestMovies();
  }, []);

  return (
    <div className="position-relative">
      <Navbar />
      <div className="movies-list-container">
        <div className="movies-list container-fluid row">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
