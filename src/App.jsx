import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Registration from "./Registration.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}

export default App;
