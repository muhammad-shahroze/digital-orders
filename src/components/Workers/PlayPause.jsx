import React, { Component } from 'react';
import "./Workers.css"

class PlayPause extends Component {
  state = {
    toggleClass: 'play'
  }


  togglePlayPause = () => {
    this.setState({
      toggleClass: this.state.toggleClass === 'play' ? 'pause' : 'play'
    })
  }

  render() {
    return (
      <div className="play-pause">
        <button className={`button ${this.state.toggleClass}`} onClick={this.togglePlayPause}></button>
      </div>
    )

  }
}

export default PlayPause;