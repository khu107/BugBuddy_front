import React from "react";
import "../css/app.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/headers/Navbar";
import "../css/navbar.css";
import Basket from "./components/headers/basket";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Navbar />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>

      <Basket />
    </>
  );
}

export default App;
