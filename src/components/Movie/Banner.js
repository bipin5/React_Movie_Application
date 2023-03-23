import "../../assets/scss/index.scss";
import Details from "./Details";
import MovieCard from "./MovieCard";

function Banner() {
  return (
    <div className="position-relative">
      <div className="m-2 d-flex flex-column align-items-center position-relative banner-container">
        <div className="position-relative m-2 d-flex w-100 flex-column-reverse flex-sm-row movie-banner">
          <Details />
        </div>
        <MovieCard />
      </div>
    </div>
  );
}

export default Banner;
