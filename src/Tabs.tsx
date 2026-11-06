import React, { useState } from "react";
import "./App.css";

const Tabs = ({ children }) => {
  const [activeTab, seTActiveTab] = useState(
    Array.isArray(children) ? children[0].props.label : "",
  );
  const getActiveTab = () => {
    if (Array.isArray(children)) {
      const activeChild = children.find(
        (child) => child.props.label === activeTab,
      );
      return activeChild.props.children;
    }

    return <></>;
  };

  return (
    <div className="container">
      <div className="tabs-header">
        {Array.isArray(children) &&
          children.map((child) => {
            console.log(child, child.props);
            return (
              <div
                className="tabs"
                onClick={() => {
                  seTActiveTab(child.props.label);
                }}
              >
                {child.props.label}
              </div>
            );
          })}
      </div>
      <div className="tab-content">{getActiveTab()}</div>
    </div>
  );
};

export const TabsChild: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => {
  return <></>;
};

export default Tabs;
