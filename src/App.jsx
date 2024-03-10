import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import TheCollection from "./Components/TheCollection";
import TheAbout from "./Components/TheAbout";
import Contact from "./Components/Contact";
import ShoppingCart from "./Components/ShoopingBag"; // Import ShoppingCart component

// Import Collection Product JSX components
import Trouser from "./Components/CollectionProductJs/Trouser";
import PoloShirt from "./Components/CollectionProductJs/PoloShirt";
import BermudaShort from "./Components/CollectionProductJs/BermudaShort";
import Sweater from "./Components/CollectionProductJs/Sweater";
import CottonShirt from "./Components/CollectionProductJs/CottonShirt";
import PaddedParka from "./Components/CollectionProductJs/PaddedParka";

function App() {
  // Consider removing unused state variables like count and setCount

  return (
    <>
      <div>
        {/* Navigation bar component */}
        <NavBar />

        {/* AnimatePresence for route transitions */}
        <AnimatePresence mode="wait">
          {/* Define routes with corresponding components */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<TheAbout />} />
            <Route path="/collection" element={<TheCollection />} />

            {/* Routes for specific collection products */}
            <Route path="/trouser" element={<Trouser />} />
            <Route path="/poloshirt" element={<PoloShirt />} />
            <Route path="/bermudashort" element={<BermudaShort />} />
            <Route path="/sweater" element={<Sweater />} />
            <Route path="/cottonshirt" element={<CottonShirt />} />
            <Route path="/paddedparka" element={<PaddedParka />} />

            {/* Route for the shopping cart */}
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </AnimatePresence>

        {/* Contact component */}
        <Contact />
      </div>
    </>
  );
}

export default App;
