export default function Directors({ credits }) {
  const getDirectors = () => {
    let directors = [];

    if (credits && credits.cast) {
      for (let i = 0; i < credits.crew.length; i++) {
        if (credits.crew[i].job === "Director") {
          directors.push(credits.crew[i].original_name);
        }
      }
    }

    return directors;
  };

  return (
    <>
      <p>
        <span className="fw-bold">Director: &nbsp;</span>
        {getDirectors().map((director, index) => (
          <span key={index}>{director}, &nbsp;</span>
        ))}
      </p>
    </>
  );
}
