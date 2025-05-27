import React from "react";
import UpcomingScheduleCard from "../cards/UpcomingScheduleCard";
import "../../styles/UpcomingScheduleSection.css";

const UpcomingScheduleSection = ({ upcomingAppointmentData }) => {
  return (
    <div>
      <div className="head">The Upcoming Schedule</div>
      <div className="bot">
        {upcomingAppointmentData.map((item, i) => {
          return item.day === "Thursday" ? (
            <div className="thursday" key={i}>
              <div className="thursday-title">On Thursday</div>
              <div className="thursday-cards">
                {item.appointments.map((data, i) => {
                  return <UpcomingScheduleCard data={data} key={i} />;
                })}
              </div>
            </div>
          ) : (
            <div className="saturday" key={i}>
              <div className="saturday-title">On Saturday</div>
              <div className="saturday-cards">
                {item.appointments.map((data, i) => {
                  return <UpcomingScheduleCard data={data} key={i} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingScheduleSection;
