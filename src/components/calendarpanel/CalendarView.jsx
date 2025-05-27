import React from "react";
import CalendarGrid from "./CalendarGrid";
import UpcomingScheduleSection from "./UpcomingScheduleSection";
import "../../styles/CalendarView.css";
import { upcomingAppointmentData } from "../../data/UpcomingAppointmentsData";

const CalendarView = () => {
  return (
    <div className="calendar-main">
      <div className="calendar-section">
        <div className="calendar-info">
          <div className="calendar-month">October 2025</div>
          <div className="calendar-shift">
            <img src="public/assets/left.svg" />
            <img src="public/assets/right.svg" />
          </div>
        </div>
        <CalendarGrid />
      </div>
      <div className="upcomingschedule-section">
        <UpcomingScheduleSection
          upcomingAppointmentData={upcomingAppointmentData}
        />
      </div>
    </div>
  );
};

export default CalendarView;
