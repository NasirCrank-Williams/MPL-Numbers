import React from "react";
import ReactDOM from "react-dom";
import Converter from "./Converter/Converter.js";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

import "./styles.css";

import WeightAndMass from "./units/WeightAndMass";
import Temperature from "./units/Temperature";
import Length from "./units/Length";

class App extends React.Component {
  render() {
    return (
      <div>
        <Converter />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
