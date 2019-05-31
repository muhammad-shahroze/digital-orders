import React, { Component } from 'react';
import "./Workers.css"

class PlayPause extends Component {
  state = {
    toggleClass: 'play'
  }


  togglePlayPause = () => {
    console.log('hi')
    this.setState({
      toggleClass: this.state.toggleClass === 'play' ? 'pause' : 'play'
    })
  }

  render() {
    return (
      <div className="PlayPause">
        <button className={`button ${this.state.toggleClass}`} onClick={this.togglePlayPause}></button>
      </div>
    )

  }
}

export default PlayPause;