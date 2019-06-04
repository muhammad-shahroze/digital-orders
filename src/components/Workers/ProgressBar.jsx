import React, { Component } from 'react'


class ProgressBar extends Component {
  render() {
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    )
  }
}

export default ProgressBar;
