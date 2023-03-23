import { useState } from "react";
import "assets/scss/index.scss";
import Details from "./Details";
import Sliders from "./Sliders";
import Buttons from "./Buttons";

export default function Banner() {
  const [bannerData, setBannerData] = useState();
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleClick = (movie) => {
    setBannerData(movie);
  };

  return (
    <div className="m-2 d-flex flex-column align-items-center position-relative banner-container">
      <div className="position-relative m-2 d-flex w-100 flex-column-reverse flex-sm-row movie-banner">
        <Details movie={bannerData} />
      </div>
      <Sliders
        handleClick={handleClick}
        scrollLeft={scrollLeft}
        setScrollLeft={setScrollLeft}
      />
      <Buttons scrollLeft={scrollLeft} setScrollLeft={setScrollLeft} />
    </div>
  );
}
