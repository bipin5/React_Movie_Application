export default function GenreFilter({ genre, genres, setGenre }) {
  const getGenresData = () => {
    let genreNames = [];

    for (let i = 0; i < genres.length; i++) {
      genreNames.push(genres[i]);
    }

    return genreNames;
  };

  const genreChangeHandler = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className="col-sm-4 d-flex flex-column">
      <span className="text-white">Genre</span>
      <select
        name="genre"
        id="genre"
        value={genre}
        className="form-select"
        onChange={genreChangeHandler}
      >
        <option value="all">All</option>
        {getGenresData().map((genre, index) => (
          <option key={index} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
