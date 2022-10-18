
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Recipes from "./pages/Recipes";
import Flexbox2Col from "./pages/Flexbox2Col";
import TabsPage from "./pages/TabsPage";


const RouterContainer = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/flex2col" element={<Flexbox2Col />} />
      <Route path="/tabs" element={<TabsPage />} />
    </Routes>
  );
};

export default RouterContainer;
