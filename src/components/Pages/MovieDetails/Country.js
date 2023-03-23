export default function Country({ movie }) {
  const getCountryData = () => {
    let countries = [];

    if (movie && movie.production_countries) {
      for (let i = 0; i < movie.production_countries.length; i++) {
        countries.push(movie.production_countries[i].iso_3166_1);
      }
    }

    return countries;
  };

  return (
    <p>
      <span className="fw-bold">Country: &nbsp;</span>
      {getCountryData().map((country, index) => (
        <span key={index}>{country}</span>
      ))}
    </p>
  );
}
