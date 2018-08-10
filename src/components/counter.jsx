import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    imageUrl:
      "https://media.gettyimages.com/photos/studio-shot-of-young-beautiful-woman-picture-id610576696"
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return this.state.count == 0 ? "Zero" : count;
  }
}
