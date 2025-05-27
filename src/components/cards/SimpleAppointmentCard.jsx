import React from "react";
import "../../styles/SimpleAppointmentCard.css";
const SimpleAppointmentCard = ({ info }) => {
  return (
    <div className={`appointment-card ${info.appointed}`}>
      <div className="appointment-card-top">
        <div className="title">{info.title}</div>
        <div className="icon">{info.icon}</div>
      </div>
      <div className="appointment-card-time">{info.time}</div>
      <div className="appointment-doctor">{info.doctor}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
