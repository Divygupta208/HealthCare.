import React from "react";
import "../../styles/UpcomingScheduleCard.css";
const UpcomingScheduleCard = ({ data }) => {
  return (
    <div className={`schedule-card ${data.appointed}`}>
      <div className="schedule-card-top">
        <div className="title">{data.title}</div>
        <div className="icon">{data.icon}</div>
      </div>
      <div className="schedule-card-time">{data.time}</div>
    </div>
  );
};

export default UpcomingScheduleCard;
