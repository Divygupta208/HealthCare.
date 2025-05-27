import React from "react";
import "../../styles/HealthStatusSection.css";
import HealthStatusCard from "../cards/HealthStatusCard";
import { FaArrowRight } from "react-icons/fa6";

const HealthStatusSection = ({ AnatomyHealthData }) => {
  return (
    <div className="status-main">
      {AnatomyHealthData.map((item, i) => {
        return (
          <div className="health-status-card">
            <HealthStatusCard organData={item} key={i} />
          </div>
        );
      })}
      <div className="more-details">
        Details <FaArrowRight className="arrow" />
      </div>
    </div>
  );
};

export default HealthStatusSection;
