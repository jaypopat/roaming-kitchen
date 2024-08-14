import { useState } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

export const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState(5);

  // define an onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const TabScreen = ({ activeTab, idx, ...props }) => {
    return (
      <div
        className="animate__animated animate__fadeInLeft"
        role="tabpanel"
        {...props}
      >
        {activeTab === idx && <div className="mx-4">Tab screen {idx}</div>}
      </div>
    );
  };
  return (
    <div className="App">
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        {/* generating an array to loop through it  */}
        {[...Array(20).keys()].map((item) => (
          <Tab key={item}>Tab {item}</Tab>
        ))}
      </Tabs>
      {[...Array(20).keys()].map((item) => (
        <TabScreen activeTab={activeTab} idx={item} key={item}>
          Page {item}
        </TabScreen>
      ))}
    </div>
  );
};
