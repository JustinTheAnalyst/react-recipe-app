import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Flexbox2Col from "./pages/Flexbox2Col";

const RouterContainer = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/flex2col" element={<Flexbox2Col />} />
    </Routes>
  );
};

export default RouterContainer;
