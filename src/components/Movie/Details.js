import Image from "components/Images/image";
import genreApi from "API/genreApi";
import { useEffect, useState } from "react";

export default function Details({ movie }) {
  const [genres, setGenres] = useState([]);

  const genreID = movie[0].genre_ids;

  useEffect(() => {
    genreApi().then((genres) => {
      const genreArray = genres.filter((genre) => genreID.includes(genre.id));

      const genreNames = genreArray.map((genre) => genre.name);

      setGenres(genreNames);
    });
  }, []);

  return (
    <>
      <div className="p-2 h-50 w-100 movie-details-container">
        <div className="position-absolute text-white card-details">
          <h1 className="text-uppercase fs-3">{movie.original_title}</h1>
          <div className="mb-3 lh-1">
            {genres.map((genre) => (
              <span className="d-inline-block pe-3">{genre}</span>
            ))}
          </div>
          <button className="bg-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-play"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />{" "}
            </svg>{" "}
          </button>
          <p className="mt-3">{movie.overview}</p>
        </div>
      </div>
      <Image
        selectedImg={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        title={movie.original_title}
      />
    </>
  );
}
