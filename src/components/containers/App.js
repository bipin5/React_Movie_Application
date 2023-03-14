import { Route, Routes } from "react-router-dom";

import Handle from "components/Movie/Handle";
import Movies from "components/Movie/Movies";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Handle />} />
      <Route exact path="/movies" element={<Movies />} />
    </Routes>
  );
}

export default App;
