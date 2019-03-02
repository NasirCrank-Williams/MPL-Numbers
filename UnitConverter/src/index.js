import React from "react";
import ReactDOM from "react-dom";
import Converter from "./Converter/Converter.js";

import "./styles.css";

import WeightAndMass from "./units/WeightAndMass";
import Temperature from "./units/Temperature";
import Length from "./units/Length";

class App extends React.Component {
  state = {
    clicks: 0,
    class: ""
  };

  changeButtonColor = id => {};

  handleClick = event => {
    let className = event.target.className;
    this.setState({ clicks: App.state.clicks + 1 });
    if (this.state.clicks === 2) {
      if (this.state.class === className) {
      }
    }
  };

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
