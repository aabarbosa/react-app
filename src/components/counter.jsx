import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 1,
    imageUrl:
      "https://media.gettyimages.com/photos/studio-shot-of-young-beautiful-woman-picture-id610576696"
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span style={{ fontSize: 30 }} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ke90Tje7VS0?start=2636"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}
