import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div class="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-small"
          >
            Delete
          </button>
        </div>
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
