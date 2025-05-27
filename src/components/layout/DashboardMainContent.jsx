import React from "react";
import DashboardOverview from "../dashboardoverview/DashboardOverview";
import CalendarView from "../calendarpanel/CalendarView";
import "../../styles/DashboardMainContent.css";

const DashboardMainContent = ({ AnatomyHealthData }) => {
  return (
    <section className="dashboard-main">
      <div className="dashboard-left">
        <DashboardOverview AnatomyHealthData={AnatomyHealthData} />
      </div>
      <div className="dashboard-right">
        <CalendarView />
      </div>
    </section>
  );
};

export default DashboardMainContent;
