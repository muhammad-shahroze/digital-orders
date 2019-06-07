import React, { Component } from 'react'
import "./Workers.css"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
// import ProgressBar from './ProgressBar'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Assignment extends Component {

  state = {
    btnDropright: false,
    showStars: false,
    dateScheduled: new Date(),
  }

  showPriorityStars = () => {
    this.setState({
      showPriorityStars: true
    })
  }

  selectDate = (date) => {
    this.setState({
      dateScheduled: date,
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
            <DropdownItem>Auto Assign</DropdownItem>
            <DropdownItem>Select Workers</DropdownItem>
            <DatePicker className="date-picker" selected={this.state.dateScheduled} onChange={this.selectDate} onSelect={this.handleSelect} placeholderText="Schedule" showTimeSelect dateFormat="Pp" />
            <DropdownItem onClick={() => this.props.archiveJob()}>Archive</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default Assignment;