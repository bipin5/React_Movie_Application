import "../../assets/scss/index.scss";

export default function Image() {
  return (
    <div className="overflow-hidden banner-image">
      <img
        className="img-fluid"
        src="https://image.tmdb.org/t/p/w1280//ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
        alt="movie-name"
      />
    </div>
  );
}
