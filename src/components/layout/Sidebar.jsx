import React from "react";
import "../../styles/Sidebar.css";

const Sidebar = ({ navigationLinks }) => {
  return (
    <div className="sidebar-main">
      <div className="general-options">
        <div className="general-title">General</div>
        {navigationLinks.general.map((item, idx) => (
          <div
            className={`${item.label.toLowerCase()} ${
              item.selected ? "selected" : ""
            }
            }`}
            key={idx}
          >
            {item.icon && <img src={item.icon} alt={item.label} />}
            {item.icons &&
              item.icons.map((iconPath, i) => (
                <img
                  src={iconPath}
                  key={i}
                  alt={`${item.label}-${i}`}
                  className={`image${i}`}
                />
              ))}
            <div className="item-title">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="tool-options">
        <div className="tool-title">Tools</div>
        {navigationLinks.tools.map((item, idx) => (
          <div className={item.label.toLowerCase()} key={idx}>
            <img src={item.icon} alt={item.label} />
            <div>{item.label}</div>
          </div>
        ))}
      </div>
      <div className="settings"></div>
    </div>
  );
};

export default Sidebar;
