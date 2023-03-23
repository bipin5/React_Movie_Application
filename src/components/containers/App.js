import Handle from "components/Movie/Handle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Handle />} />
    </Routes>
  );
}

export default App;
