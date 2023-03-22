export default function Actors({ credits }) {
  const getActorsData = () => {
    let actors = [];

    if (credits && credits.cast) {
      for (let i = 0; i < credits.cast.length; i++) {
        if (credits.cast[i].known_for_department === "Acting") {
          actors.push(credits.cast[i].original_name);
        }
      }
    }

    return actors;
  };

  return (
    <p>
      <span className="fw-bold">Actor: &nbsp;</span>
      {getActorsData()
        .slice(0, 5)
        .map((actor, index) => (
          <span key={index}>{actor}, &nbsp;</span>
        ))}
    </p>
  );
}
