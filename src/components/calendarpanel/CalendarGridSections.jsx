import React from "react";
import "../../styles/CalendarGridSection.css";

const CalendarGridSections = ({ appointment, appointedTimes }) => {
  return (
    <div className={`single-grid ${appointment.day === "Tue" ? "Tue" : ""}`}>
      <div className={`day ${appointment.day === "Sun" ? "Sun" : ""}`}>
        {appointment.day}
      </div>
      <div className={`date ${appointment.day === "Sun" ? "Sun" : ""}`}>
        {appointment.Date}
      </div>
      <div className="schedules">
        {appointment.schedules.map((time, ind) => {
          const isAppointed = appointedTimes.includes(time);
          return (
            <div
              key={ind}
              className={`time-slot ${isAppointed ? "appointed" : ""} ${
                appointment.day === "Sun" ? "Sun" : ""
              } 
              ${appointment.day === "Tue" ? "Tue" : ""}
               ${appointment.day === "Sat" ? "Sat" : ""}
              `}
            >
              <div>{time}</div>
              <div className="dot">
                {appointment.day === "Thurs" && isAppointed ? "." : ""}
                {appointment.day === "Sat" && isAppointed ? "." : ""}
                {appointment.day === "Sun" && isAppointed ? "." : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGridSections;
