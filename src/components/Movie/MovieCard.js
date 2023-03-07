import "../../assets/scss/index.scss";

export default function MovieCard() {
  return (
    <div className="d-flex position-absolute pt-4 bottom-0 overflow-hidden w-100">
      <div className="me-3 movie-card">
        <div className="border border-light">
          <img
            src="https://image.tmdb.org/t/p/w1280//ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
            alt="antman-card"
            className="img-fluid"
          />
          <p className="text-white">Antman and the wasp: Quantumania</p>
        </div>
      </div>
      <div className="me-3 movie-card">
        <div className="border border-light">
          <img
            src="https://image.tmdb.org/t/p/original/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg"
            alt="creed-card"
            className="img-fluid"
          />
          <p className="text-white">Creed</p>
        </div>
      </div>
      <div className="me-3 movie-card">
        <div className="border border-light">
          <img
            src="https://image.tmdb.org/t/p/original/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg"
            alt="we-have-a-ghost-card"
            className="img-fluid"
          />
          <p className="text-white">We have a Ghost</p>
        </div>
      </div>
      <div className="me-3 movie-card">
        <div className="border border-light">
          <img
            src="https://image.tmdb.org/t/p/original/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg"
            alt="we-have-a-ghost-card"
            className="img-fluid"
          />
          <p className="text-white">We have a Ghost</p>
        </div>
      </div>
      <div className="me-3 movie-card">
        <div className="border border-light">
          <img
            src="https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
            alt="puss-in-boots-the-last-wish-card"
            className="img-fluid"
          />
          <p className="text-white">Puss in Boots: The Last Wish</p>
        </div>
      </div>
      <div className="me-3 movie-card">
        <div className="border border-light">
          <img
            src="https://image.tmdb.org/t/p/original/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg"
            alt="knock-at-the-cabin-card"
            className="img-fluid"
          />
          <p className="text-white">Knock at the Cabin</p>
        </div>
      </div>
      <div className="me-3 movie-card">
        <div className="border border-light">
          <img
            src="https://image.tmdb.org/t/p/original/5C9rerMqV1X0jnRdbbsM1BswVI2.jpg"
            alt="magic-mike's-last-dance-card"
            className="img-fluid"
          />
          <p className="text-white">Magic Mike's Last Dance</p>
        </div>
      </div>
      <div className="me-3 movie-card">
        <div className="border border-light">
          <img
            src="https://image.tmdb.org/t/p/original/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg"
            alt="babylon-card"
            className="img-fluid"
          />
          <p className="text-white">Babylon</p>
        </div>
      </div>
    </div>
  );
}
