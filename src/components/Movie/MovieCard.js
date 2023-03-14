import { IMAGE_URL } from "constants/constants";

export default function MovieCard({ movie }) {
  return (
    <a className="text-decoration-none" href="">
      <div className="m-sm-2">
        <div className="border rounded border-light border-3">
          <img
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid"
          />
        </div>
        <h4 className="text-white ms-1 mt-2 lh-1 fs-5">
          {movie.original_title}
        </h4>
        <h5 className="text-light ms-1 lh-1 fs-6">
          {new Date(movie.release_date).getFullYear()}
        </h5>
      </div>
    </a>
  );
}
