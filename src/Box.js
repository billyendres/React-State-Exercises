import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helper";

class Box extends Component {
  static defaultProps = {
    allColors: [
      "purple",
      "green",
      "red",
      "yellow",
      "blue",
      "orange",
      "cyan",
      "magenta",
      "teal",
      "black",
      "turquoise",
      "magenta",
      "pink"
    ]
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
  }

  changeColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }

  handleClick = () => {
    this.changeColor();
  };

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;
