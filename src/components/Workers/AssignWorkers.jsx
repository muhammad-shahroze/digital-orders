import React, { Component } from 'react'

class AssignWorkers extends Component {
  state = {
    score: 0,
  };

  increment = () => {
    this.setState({
      score: this.state.score === 25 ? this.state.score : this.state.score + 1,
    });
  }

  decrement = () => {
    this.setState({
      score: this.state.score === 0 ? this.state.score : this.state.score - 1,
    });
  }

  render() {
    return (
      <div className="manage-workers">
        <button className="minus-worker" onClick={this.decrement}>-</button>
        <div> Workers Assigned {this.state.score} / 25</div>
        <button className="add-worker" onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default AssignWorkers
