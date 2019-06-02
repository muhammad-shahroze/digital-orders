import React, { Component } from 'react'
import "./Workers.css"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class Assignment extends Component {

  state = {
    btnDropright: false,
  }

  render() {
    return (
      <div className="assignment-dropdown">
        <Dropdown direction="down" isOpen={this.state.btnDropdown} toggle={() => { this.setState({ btnDropdown: !this.state.btnDropdown }); }}>
          <DropdownToggle caret>
            Unassigned
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Auto Assign</DropdownItem>
            <DropdownItem>Select Workers</DropdownItem>
            <DropdownItem>Schedule</DropdownItem>
            <DropdownItem>Archive</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default Assignment;