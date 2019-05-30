import React, { Component } from 'react'

class BurgerMenu extends Component {

  state = { menuToggle: false }

  handleClick = () => {
    this.setState({
      menuToggle: !this.state.menuToggle
    })
  }

  render() {
    return (
      <div className="burgermenu-container" onClick={this.handleClick} >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
  }
}

export default BurgerMenu;