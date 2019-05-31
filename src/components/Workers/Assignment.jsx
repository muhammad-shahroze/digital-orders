import React, { Component } from 'react'
import "./Workers.css"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class Assignment extends Component {

  state = {
    btnDropright: false,
  }

  render() {
    return (
      <div className="assignment-dropright">
        <Dropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
          <DropdownToggle caret>
            Unassigned
        </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default Assignment;