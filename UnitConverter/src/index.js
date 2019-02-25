import React from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

import "./styles.css";

import WeightAndMass from "./units/WeightAndMass";

function App() {
  return (
    <Tabs defaultTab="weight-and-mass" vertical className="vertical-tabs">
      <TabList>
        <Tab tabFor="weight-and-mass">Weight And Mass</Tab>
        <Tab tabFor="temperature">Temperature</Tab>
        <Tab tabFor="area">Area</Tab>
      </TabList>

      <TabPanel tabId="weight-and-mass">
        <p />
      </TabPanel>

      <TabPanel tabId="temperature">
        <p />
      </TabPanel>

      <TabPanel tabId="area">
        <p />
      </TabPanel>
    </Tabs>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
