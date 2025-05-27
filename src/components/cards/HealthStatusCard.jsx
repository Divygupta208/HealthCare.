import React from "react";
import "../../styles/HealthStatusCard.css";

const getHealthStatus = (value) => {
  if (value <= 30) return "good";
  if (value <= 70) return "moderate";
  return "bad";
};
const HealthStatusCard = ({ organData }) => {
  const rating = getHealthStatus(organData.status);

  console.log(rating);

  return (
    <div className="card-main">
      <div className="card-label">
        <img
          src={`${organData.image}`}
          className={`card-image ${organData.organ.toLowerCase()}`}
        />
        <div className={`card-title ${organData.organ}`}>{organData.organ}</div>
      </div>
      <div className="card-date">Date:{organData.date}</div>
      <div className="card-stats">
        <div className={`health-status-bar ${rating}`}></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;
