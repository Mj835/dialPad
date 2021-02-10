import React, { Component } from "react";
import ResultComponent from "./components/ResultComponent";
import KeypadComponent from "./components/KeypadComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "backspace") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="dialpad-body">
          {/* <h1>Simple Dial Pad</h1> */}
          <ResultComponent result={this.state.result} />
          <KeypadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
