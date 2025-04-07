// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import HomeBn from "./HomeBn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/homebn" element={<HomeBn />} />
    </Routes>
  );
}

export default App;
