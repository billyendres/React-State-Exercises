import React, { Component } from "react";
import "./Lotto.css";
import LottoBall from "./LottoBall";

class Lotto extends Component {
  static defaultProps = {
    name: "Mega Lotto",
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
  }

  generate() {
    this.setState(currentState => ({
      nums: currentState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <section className="Lotto">
        <h1>{this.props.name}</h1>
        <div>
          {this.state.nums.map(n => (
            <LottoBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Spin The Lotto Wheel</button>
      </section>
    );
  }
}
export default Lotto;
