import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = { dice1: "six", dice2: "three", rolling: false };
  }

  roll = () => {
    const newDice1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDice2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({ dice1: newDice1, dice2: newDice2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Dice face={this.state.dice1} rolling={this.state.rolling} />
          <Dice face={this.state.dice2} rolling={this.state.rolling} />
        </div>
        {this.state.dice1 === "one" && this.state.dice2 === "one" ? (
          <h2>SNAKE EYES</h2>
        ) : (
          <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? <h2>Rolling...</h2> : <h2>Roll Dice</h2>}
          </button>
        )}
      </div>
    );
  }
}

export default RollDice;
