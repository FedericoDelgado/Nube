import React from "react";
import { About } from "../components/about"; 

const AboutPage = ({ landingPageData }) => {
  return (
    <div>
    <About data={landingPageData.About} />
    </div>
  );
};

export default AboutPage;