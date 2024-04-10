import React from "react";
import "../css/app.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./screen/homePage";
import Header from "./components/header";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.pathname === "/" ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
