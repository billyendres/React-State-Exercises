import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { click: 0 };
  }
  handleClicks = () => {
    this.setState({ click: Math.floor(Math.random() * 10) + 1 });
  };
  render() {
    return (
      <div>
        <h1>Number is: {this.state.click}</h1>
        {this.state.click === 6 ? (
          <h2>You win!</h2>
        ) : (
          <button onClick={this.handleClicks}>Random Number</button>
        )}
      </div>
    );
  }
}
export default Clicker;
