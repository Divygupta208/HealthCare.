import React from "react";
import AnatomySection from "./AnatomySection";
import ActivityFeed from "./ActivityFeed";
import HealthStatusSection from "./HealthStatusSection";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../../styles/DashboardOverview.css";

const DashboardOverview = ({ AnatomyHealthData }) => {
  return (
    <div className="dashboard-overview">
      <div className="dashboard-top">
        <div className="top-title">Dashboard</div>
        <div className="top-calendar">
          This Week <MdOutlineKeyboardArrowDown />{" "}
        </div>
      </div>
      <div className="anatomy-section">
        <AnatomySection />
        <HealthStatusSection AnatomyHealthData={AnatomyHealthData} />
      </div>
      <div className="activity-section">
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardOverview;
