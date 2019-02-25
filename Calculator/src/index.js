/* A simple calculator to do basic operators. */

import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator/Calculator.js";

import "./styles.css";

class App extends React.Component {
  state = {
    expression: ""
  };

  buttonClicked = event => {
    let value = event.target.value;
    let express = this.state.expression;
    if (value === "execute") {
      this.setState({
        expression: eval(express)
      });
    } else if (value === "backspace") {
      this.setState({
        expression: express.slice(0, express.length - 1)
      });
    } else if (value === "power-of-2") {
      this.setState({
        expression: Math.pow(eval(express), 2)
      });
    } else if (value === "power-of-3") {
      this.setState({
        expression: Math.pow(eval(express), 3)
      });
    } else if (value === "clear") {
      this.setState({
        expression: ""
      });
    } else {
      this.setState({
        expression: (express += value)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Calculator
          onclick={this.buttonClicked}
          display={this.state.expression}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
