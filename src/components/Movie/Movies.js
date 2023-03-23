import { useEffect, useState } from "react";

import "assets/scss/index.scss";

import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/navbar";
import Pagination from "components/Pages/Pagination";

import MovieApi from "API/movieApi";

import MovieCard from "./MovieCard";

export default function Movies() {
  const INITIAL_PAGE = 1;

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);

  const getLatestMovies = async () => {
    try {
      const results = await MovieApi(page);

      setMovies(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const pageChangeHandler = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getLatestMovies();
  }, [movies]);

  return (
    <div className="position-relative">
      <Navbar />
      <div className="movies-list-container">
        <div className="movies-list container-fluid row">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      </div>
      <Pagination pageChangeHandler={pageChangeHandler} />
      <Footer />
    </div>
  );
}
