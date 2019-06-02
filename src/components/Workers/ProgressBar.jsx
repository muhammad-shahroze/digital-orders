import React, { Component } from 'react'
import Metrics from './Metrics'


class ProgressBar extends Component {

  state = {
    barVisible: false
  }

  showMetrics = () => {

  }

  render() {
    const { barVisible } = this.state;

    if (barVisible) {
      return (
        <div className="progress">
          <div onClick={this.showMetrics} className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      )
    }
    return <> </>;
  }
}

export default ProgressBar;
