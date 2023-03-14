export default function Genres({ movie }) {
  const getGenresData = () => {
    let genres = [];

    if (movie && movie.genres) {
      for (let i = 0; i < movie.genres.length; i++) {
        genres.push(movie.genres[i].name);
      }

      return genres;
    }
  };

  return (
    <p>
      <span className="fw-bold">Genre: &nbsp;</span>
      {getGenresData().map((genre, index) => (
        <span key={index}>{genre},&nbsp;</span>
      ))}
    </p>
  );
}
