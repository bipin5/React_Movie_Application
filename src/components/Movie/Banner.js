import "../../assets/scss/index.scss";
import Navbar from "components/Navbar/navbar";
import Details from "./Details";

function Banner() {
  return (
    <div className="position-relative">
      <Navbar />
      <div className="m-2 d-flex flex-column align-items-center position-relative banner-container">
        <div className="position-relative m-2 d-flex flex-column-reverse flex-sm-row movie-banner">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default Banner;
