import React from "react";
import "../../styles/AnatomySection.css";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
const AnatomySection = () => {
  return (
    <div className="anatomy-main">
      <div>
        <HiMagnifyingGlassPlus className="magnify" />
      </div>
      <div className="scanning-anatomy">
        <img src="/assets/anatomy.png" className="human-body" />
        <div className="healthy-heart">
          <img src="/assets/scanner.svg" className="scanner" />
          <div className="title"> ❤️ Healthy Heart </div>
        </div>
        <div className="healthy-leg">
          <div className="title">Healthy Leg 🦵</div>
          <img src="/assets/scanner.svg" className="scanner" />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
