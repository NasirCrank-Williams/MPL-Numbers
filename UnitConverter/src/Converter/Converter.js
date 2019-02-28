import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

const Converter = () => {
  return (
    <div id="converter">
      <Tabs defaultTab="weight-and-mass" vertical className="vertical-tabs">
        <TabList>
          <Tab tabFor="weight-and-mass">Weight And Mass</Tab>
          <Tab tabFor="temperature">Temperature</Tab>
          <Tab tabFor="length">Length</Tab>
        </TabList>

        <TabPanel tabId="weight-and-mass">
          <p />
        </TabPanel>

        <TabPanel tabId="temperature">
          <p />
        </TabPanel>

        <TabPanel tabId="length">
          <p />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Converter;
