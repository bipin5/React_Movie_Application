import { Route, Routes } from "react-router-dom";

import Handle from "components/Movie/Handle";
import Movies from "components/Movie/Movies";
import MovieDetails from "components/Movie/MovieDetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Handle />} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/detail/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
