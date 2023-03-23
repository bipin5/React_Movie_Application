import { useState } from "react";

import MovieCard from "components/Movie/MovieCard";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/Footer";
import Pagination from "components/Pages/Pagination";
import SearchFields from "components/Pages/Search/SearchFields";

export default function Search() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const pageChangeHandler = (page) => {
    setPage(page);
  };

  const moviesHandler = (movies) => {
    setMovies(movies);
  };

  return (
    <div className="position-relative">
      <Navbar />
      <SearchFields page={page} moviesHandler={moviesHandler} />
      <div className="pt-3">
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
