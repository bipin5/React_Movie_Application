import Image from "components/Images/image";
import GenreApi from "API/genreApi";
import { useEffect, useState } from "react";

export default function Details({ movie }) {
  const [genresData, setGenresData] = useState([]);

  const genreData = async () => {
    const response = await GenreApi();

    setGenresData(response);
  };

  const getGenresData = () => {
    let genres = [];

    for (let i = 0; i < movie.genre_ids.length; ++i) {
      for (let j = 0; j < genresData.length; ++j) {
        if (movie.genre_ids[i] === genresData[j].id) {
          genres.push(genresData[j]);
        }
      }
    }

    return genres;
  };

  useEffect(() => {
    genreData();
  }, []);

  return (
    movie && (
      <>
        <div className="p-2 h-50 w-100 movie-details-container">
          <div className="position-absolute text-white card-details">
            <h1 className="text-uppercase fs-3">{movie.original_title}</h1>
            <div className="mb-3 lh-1">
              {getGenresData().map((genre, i) => (
                <span key={i}>
                  {" "}
                  {genre.name} &nbsp;{" "}
                  {i < getGenresData().length - 1 ? "|" : ""}{" "}
                </span>
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
    )
  );
}
