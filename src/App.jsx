import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import { Contact } from "./components/contact";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TemplatesPage from "./pages/TemplatesPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes> 
        <Route path="/" element={<HomePage landingPageData={landingPageData} />} />
        <Route path="/home" element={<HomePage landingPageData={landingPageData} />} />
        <Route path="/about" element={<AboutPage landingPageData={landingPageData} />} /> 
        <Route path="templates" element={<TemplatesPage landingPageData={landingPageData} />} />
        <Route path="services" element={<ServicesPage landingPageData={landingPageData} />} />


        <Route path="contact" element={<ContactPage data={landingPageData.Contact} />} />
      </Routes>
      <Contact data={landingPageData.Contact}/>
    </div>
  );
};

export default App;
