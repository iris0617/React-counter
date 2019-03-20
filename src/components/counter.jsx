import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-small m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    if (this.props.counter.count == 0) {
      return "zero";
    } else {
      return this.props.counter.value;
    }
  }

  getBadgeClasses() {
    let badgeClass = "badge m-2 badge-";
    if (this.props.counter.value == 0) {
      badgeClass += "warning";
    } else {
      badgeClass += "primary";
    }
    return badgeClass;
  }
}
export default Counter;
