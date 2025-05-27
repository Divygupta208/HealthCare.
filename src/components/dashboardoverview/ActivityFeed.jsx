import React from "react";
import "../../styles/ActivityFeed.css";
import { activityData } from "../../data/ActivityBarsData";

const ActivityFeed = () => {
  return (
    <div className="activity-main">
      <div className="activity-top">
        <div className="activity-title">Activity</div>
        <div className="activity-subtitle">3 appointments on this week</div>
      </div>

      <div className="activity-chart">
        {activityData.map((bar) => (
          <div
            key={bar.id}
            className="bar"
            style={{ marginBottom: bar.margin }}
          >
            {bar.segments.map((segment, i) => (
              <div
                key={i}
                className="bar-segment"
                style={{
                  height: `${segment.height}px`,
                  backgroundColor: `${segment.color}`,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="activity-days">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thus</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
    </div>
  );
};

export default ActivityFeed;
