import React from "react";
import "./Calculator.css";

const Calculator = props => {
  return (
    <div id="calculator">
      <div id="input">
        <input id="display" type="text" value={props.display} readOnly />
        <button value="7" onClick={props.onclick} className="number">
          7
        </button>
        <button value="8" onClick={props.onclick} className="number">
          8
        </button>
        <button value="9" onClick={props.onclick} className="number">
          9
        </button>
        <button value="/" onClick={props.onclick} className="operation">
          &#247;
        </button>
        <button value="backspace" onClick={props.onclick} className="operation">
          &#8678;
        </button>
        <button value="4" onClick={props.onclick} className="number">
          4
        </button>
        <button value="5" onClick={props.onclick} className="number">
          5
        </button>
        <button value="6" onClick={props.onclick} className="number">
          6
        </button>
        <button value="*" onClick={props.onclick} className="operation">
          &#215;
        </button>
        <button value="%" onClick={props.onclick} className="operation">
          &#37;
        </button>
        <button value="1" onClick={props.onclick} className="number">
          1
        </button>
        <button value="2" onClick={props.onclick} className="number">
          2
        </button>
        <button value="3" onClick={props.onclick} className="number">
          3
        </button>
        <button value="-" onClick={props.onclick} className="operation">
          &#8722;
        </button>
        <button
          value="power-of-2"
          onClick={props.onclick}
          className="operation"
        >
          x^2
        </button>
        <button value="0" onClick={props.onclick} className="number">
          0
        </button>
        <button value="." onClick={props.onclick} className="operation">
          .
        </button>
        <button
          value="power-of-3"
          onClick={props.onclick}
          className="operation"
        >
          x^3
        </button>
        <button value="+" onClick={props.onclick} className="operation">
          +
        </button>
        <button value="execute" onClick={props.onclick} className="operation">
          &#8617;
        </button>
        <button
          value="clear"
          onClick={props.onclick}
          id="clear"
          className="operation"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
