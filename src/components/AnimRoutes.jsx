import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import AnimalsPage from "../pages/AnimalsPage";
import ArchitecturesPage from "../pages/ArchitecturesPage";
import EventsPage from "../pages/EventsPage";
import LandscapesPage from "../pages/LandscapesPage";
import PortraitsPage from "../pages/PortraitsPage";
import VideographyPage from "../pages/VideographyPage";

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AnimalsPage" element={<AnimalsPage />} />
        <Route path="/ArchitecturesPage" element={<ArchitecturesPage />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/LandscapesPage" element={<LandscapesPage />} />
        <Route path="/PortraitsPage" element={<PortraitsPage />} />
        <Route path="/VideographyPage" element={<VideographyPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
