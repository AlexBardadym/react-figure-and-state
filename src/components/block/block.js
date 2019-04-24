import React, { Component } from "react";
import "./block.scss";

class Block extends Component {
  render() {
    return <div className="block" style={this.props.figure} />;
  }
}

export default Block;
