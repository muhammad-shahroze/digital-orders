import React, { Component } from 'react'
import { Router, Link } from "@reach/router"

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
            <li className="archive"><Link to="/Archives">Archive</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default BurgerMenu;