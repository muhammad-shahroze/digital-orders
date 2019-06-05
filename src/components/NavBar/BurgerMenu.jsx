import React, { Component } from 'react'
import Archives from '../Main/Archives'

class BurgerMenu extends Component {

  state = {
     menuToggle: false,
     archiveOrder: false
  }

  handleClick = () => {
    this.setState({
      menuToggle: !this.state.menuToggle
    })
  }

  render() {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="Archives" ><li><Archives /></li></a>
          </ul>
        </div>
      </nav>
    )
  }
}

export default BurgerMenu;