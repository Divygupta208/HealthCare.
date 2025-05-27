import React from "react";
import CalendarGridSections from "./CalendarGridSections";
import {
  calendarAppointmentData,
  appoimentsDate,
  appointmentsData,
} from "../../data/CalendarAppointmentsData";
import "../../styles/CalendarGrid.css";
import SimpleAppointmentCard from "../cards/SimpleAppointmentCard";

const isAppointed = (appointmentsDate, calendarAppointmentData) => {
  return calendarAppointmentData
    .map((calendarItem) => {
      const matchedTimes = appointmentsDate
        .filter(
          (appt) =>
            appt.Date === calendarItem.Date &&
            appt.Day === calendarItem.day &&
            calendarItem.schedules.includes(appt.Time)
        )
        .map((appt) => appt.Time);

      if (matchedTimes.length > 0) {
        return {
          ...calendarItem,
          appointedTimes: matchedTimes,
        };
      }

      return null;
    })
    .filter(Boolean);
};

const CalendarGrid = () => {
  return (
    <div className="grid-main">
      <div className="grid-dates">
        {calendarAppointmentData.map((item) => {
          const appointed = isAppointed(
            appoimentsDate,
            calendarAppointmentData
          ).find((a) => a.Date === item.Date && a.day === item.day);

          return (
            <CalendarGridSections
              key={item.Date}
              appointment={item}
              appointedTimes={appointed?.appointedTimes || []}
            />
          );
        })}
      </div>
      <div className="grid-cards">
        {appointmentsData.map((item, i) => {
          return <SimpleAppointmentCard info={item} />;
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
