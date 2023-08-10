import React from "react";
import { Gallery } from "../components/gallery"; 

const TemplatesPage = ({ landingPageData }) => {
  return (
    <div>
      <Gallery data={landingPageData.Gallery} />
    </div>
  );
};

export default TemplatesPage;