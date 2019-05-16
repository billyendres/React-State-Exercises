import React, { Component } from "react";

class Icons extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  };

  constructor(props) {
    super(props);
    this.state = { icons: [] };
  }

  addIcon = () => {
    let icon = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[icon];
    this.setState({ icons: [...this.state.icons, newIcon] });
  };

  render() {
    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default Icons;
