import React, { Component } from "react";
import "./component.css";

class App extends React.Component {
  state = {
    number: Math.floor(Math.random() * 100),
    result: "Result",
  };

  handleChange = (e) => {
    this.setState({ number2: e.target.value });
    console.log(this.state.number);
  };

  handleCheck = () => {
    if (this.state.number.toString() === this.state.number2) {
      this.setState({ result: "You win!" });
    } else {
      this.setState({
        result: "Wrong. The answer was " + this.state.number + "!",
      });
    }
  };

  render() {
    return (
      <div>
        <center>
          <div>
            <br></br>
            <h1>Number guessing game</h1>
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.handleCheck} className="button1">
              Check!
            </button>
            <h1>{this.state.result}</h1>
          </div>

          <div>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="button2"
            >
              Try again
            </button>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
