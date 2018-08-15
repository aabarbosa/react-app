import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
  }

  handleIncrement = () => {
    this.count;
    this.setState({ count: this.state.count + 1 });
  };

  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    /* imageUrl:
      "https://media.gettyimages.com/photos/studio-shot-of-young-beautiful-woman-picture-id610576696"
  */
  };

  styles = {
    fontSize: 55,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>
              {" "}
              <span
                style={{ fontSize: 30 }}
                className={this.getBadgeColorState()}
              >
                {this.formatCount()}
              </span>
              <button
                onClick={this.handleIncrement}
                className="btn btn-secondary btn-sm"
              >
                Increment
              </button>
            </li>
          ))}
        </ul>

        <iframe
          title="learnReact"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ke90Tje7VS0?start=2636"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }
  getBadgeColorState() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}
