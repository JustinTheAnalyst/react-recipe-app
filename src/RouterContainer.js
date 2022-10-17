import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes , Route } from 'react-router-dom';
import Recipes from './pages/Recipes';

const RouterContainer = () => {
  return (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default RouterContainer
