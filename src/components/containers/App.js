import { Route, Routes } from "react-router-dom";

import Handle from "components/Movie/Handle";
import Movies from "components/Movie/Movies";
import MovieDetails from "components/Movie/MovieDetails";
import Search from "components/Pages/Search/Search";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Handle />} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/detail/:id" element={<MovieDetails />} />
      <Route exact path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
