import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";
import Button from "react-bootstrap/Button";

class App extends Component {
  state = {
    isToggleOn: false,
  };

  handleClick() {
    //change the state

    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  }

  render() {
    return (
      <div className="App">
        <Button onClick={() => this.handleClick()}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </Button>
        <br />

        {this.state.isToggleOn ? <Person /> : null}
      </div>
    );
  }
}

export default App;
