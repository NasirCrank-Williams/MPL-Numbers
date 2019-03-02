import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import "./Converter.css";

const Converter = () => {
  return (
    <div id="converter">
      <input type="number" id="input" />

      <Tabs defaultTab="weight-and-mass" vertical className="vertical-tabs">
        <TabList>
          <Tab tabFor="weight-and-mass">Weight And Mass</Tab>
          <Tab tabFor="temperature">Temperature</Tab>
          <Tab tabFor="length">Length</Tab>
        </TabList>

        <TabPanel tabId="weight-and-mass">
          <button className="mass-btn" value="grain" id="grain">
            Grain
          </button>
          <button className="mass-btn" value="kilogram" id="kilogram">
            Kilogram
          </button>
          <button className="mass-btn" value="gram" id="gram">
            Gram
          </button>
          <button className="mass-btn" value="milligram" id="milligram">
            Milligram
          </button>
          <button className="mass-btn" value="pound" id="pound">
            Pound
          </button>
          <button className="mass-btn" value="ounce" id="ounce">
            Ounce
          </button>
        </TabPanel>

        <TabPanel tabId="temperature">
          <p />
        </TabPanel>

        <TabPanel tabId="length">
          <p />
        </TabPanel>
      </Tabs>

      <input type="number" id="output" readOnly />
    </div>
  );
};

export default Converter;
