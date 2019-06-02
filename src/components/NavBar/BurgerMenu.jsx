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
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#"><li>Archives</li></a>
          </ul>
        </div>
      </nav>
    )
  }
}

export default BurgerMenu;