import { useState } from "react";
import "assets/scss/index.scss";
import Details from "./Details";
import Sliders from "./Sliders";

export default function Banner() {
  const [bannerData, setBannerData] = useState();

  const handleClick = (movie) => {
    setBannerData(movie);
  };

  return (
    <div className="position-relative">
      <div className="m-2 d-flex flex-column align-items-center position-relative banner-container">
        <div className="position-relative m-2 d-flex w-100 flex-column-reverse flex-sm-row movie-banner">
          <Details movie={bannerData} />
        </div>
        <Sliders handleClick={handleClick} />
      </div>
    </div>
  );
}
