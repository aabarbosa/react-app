import React, { Component } from "react";

export default class Counter extends Component {
  handleIncrement = product => {
    this.setState({ count: this.state.count + 1 });
  };

  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeColorState()}>{this.formatCount()}</span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeColorState() {
    return (
      "badge m-2 badge-" + (this.state.count === 0 ? "warning" : "primary")
    );
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}
