// src/TodoList/AnimatedTab.jsx

import React, { useState } from "react";

const AnimatedTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const getTabComponent = () => {
    return tabs.find((tab) => tab.name === activeTab)?.component;
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            style={{
              padding: "10px",
              backgroundColor: activeTab === tab.name ? "#ddd" : "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>{getTabComponent()}</div>
    </div>
  );
};

export default AnimatedTab;
