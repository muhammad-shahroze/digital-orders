import React, { Component } from 'react'

class Assignment extends Component {
  render() {
    return (
      <div className="btn-group dropright" >
        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Unassigned
        </button>
        <div className="dropdown-menu">
        </div>
      </div>
    )
  }
}

export default Assignment;