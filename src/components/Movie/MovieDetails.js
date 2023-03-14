import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "assets/scss/index.scss";

import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/Footer";
import Actors from "components/Pages/MovieDetails/Actors";
import Directors from "components/Pages/MovieDetails/Directors";
import Genres from "components/Pages/MovieDetails/Genres";
import Country from "components/Pages/MovieDetails/Country";

import MovieDetailsApi from "API/movieDetailsApi";
import CreditsApi from "API/creditsApi";

import { IMAGE_URL } from "constants/constants";

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const response = await MovieDetailsApi(id);

      setMovie(response.data);
    };

    getMovies();
  }, []);

  useEffect(() => {
    const getCredits = async () => {
      try {
        const response = await CreditsApi(id);

        setCredits(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCredits();
  }, []);

  return (
    movie &&
    movie.genres && (
      <div className="position-relative">
        <Navbar />
        <div className="pt-5">
          <div className="m-2">
            <div className="video-container">
              <img
                className="img-fluid"
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div className="p-2 m-sm-auto movie-details">
              <h3>{movie.original_title}</h3>
              <p>{movie.overview}</p>
              <div className="details-list">
                <Genres movie={movie} />
                <Actors credits={credits} />
                <Directors credits={credits} />
                <Country movie={movie} />
                <p>
                  <span className="fw-bold">Duration: &nbsp;</span>
                  <span>{movie.runtime} min</span>
                </p>
                <p>
                  <span className="fw-bold">Release: &nbsp;</span>
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}
