import React, { Component } from 'react'
import "./Workers.css"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import ProgressBar from './ProgressBar'
import PriorityStars from './PriorityStars';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Assignment extends Component {

  state = {
    btnDropright: false,
    showStars: false,
    DataPicker: false,
  }

  showPriorityStars = () => {
    console.log('hello')
    this.setState({
      showPriorityStars: true
    })
  }

  selectDate = () => {
    this.setState({

    })
  }

  render() {
    return (
      <div className="assignment-dropdown">
        <Dropdown direction="down" isOpen={this.state.btnDropdown} toggle={() => { this.setState({ btnDropdown: !this.state.btnDropdown }); }}>
          <div>
            <DropdownToggle caret className="assign-dropdown">
              <i className="material-icons">settings</i>
              Unassigned
            </DropdownToggle>
          </div>
          <DropdownMenu>
            <DropdownItem onClick={this.state.showStars === false ? <PriorityStars /> : null}>Auto Assign</DropdownItem>
            <DropdownItem>Select Workers</DropdownItem>
            <DropdownItem><DatePicker placeholderText="Schedule" /></DropdownItem>
            <DropdownItem>Archive</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default Assignment;