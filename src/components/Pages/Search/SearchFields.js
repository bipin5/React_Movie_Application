import { useState, useEffect } from "react";

import "assets/scss/index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import GenreApi from "API/genreApi";
import DiscoverApi from "API/discoverApi";
import SearchApi from "API/searchApi";
import YearFilter from "./YearFilter";
import OrderByFilter from "./OrderByFilter";
import GenreFilter from "./GenreFilter";

export default function SearchFields({ page, moviesHandler }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const [year, setYear] = useState("all");
  const [genre, setGenre] = useState("all");
  const [orderBy, setOrderBy] = useState("popularity.desc");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getLatestMovies = async () => {
      try {
        const results = await DiscoverApi(page, genre, year, orderBy);

        setMovies(results.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getLatestMovies();
  }, [movies, genre, year, orderBy]);

  useEffect(() => {
    const getSearchMovies = async () => {
      try {
        const results = await SearchApi(query, page);

        setMovies(results.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getSearchMovies();
  }, [query, page]);

  useEffect(() => {
    const getLatestMovies = async () => {
      try {
        let results;

        if (!query) {
          results = await DiscoverApi(page, genre, year, orderBy);
        } else {
          results = await SearchApi(query, page);
        }
        setMovies(results.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getLatestMovies();
  }, [movies, genre, year, orderBy, query]);

  useEffect(() => {
    moviesHandler(movies);
  }, [movies]);

  useEffect(() => {
    const genreData = async () => {
      const response = await GenreApi();

      setGenres(response);
    };

    genreData();
  }, [genres]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onQueryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-field-container">
      <form className="w-75 m-auto mb-3" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <div className="mb-2 p-0 align-items-stretch d-flex">
            <input
              className="form-control"
              type="search"
              value={query}
              onChange={onQueryChangeHandler}
            />
            <button className="btn btn-primary d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="mt-2 row">
          <GenreFilter genres={genres} setGenre={setGenre} />
          <YearFilter year={year} setYear={setYear} />
          <OrderByFilter setOrderBy={setOrderBy} />
        </div>
      </form>
    </div>
  );
}
