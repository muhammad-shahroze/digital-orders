import React, { Component } from 'react';
import "./Card-Style.css"
import ProgressBar from '../Workers/ProgressBar';
import PriorityStars from '../Workers/PriorityStars';
import Assignment from '../Workers/Assignment';
import PlayPause from '../Workers/PlayPause';
import AssignWorkers from '../Workers/AssignWorkers';


class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  state = {
    cardDataArchive: false
  }


  archiveJob = (e) => {
  }


  render() {
    return (
      <div className="" >
        <div className={`card ${window.innerWidth <= 992 ? 'w-100' : ''}`}>
          <div className="overflow">
            <img src={this.props.imgsrc} alt="item 1" className="card-img-top" />
          </div>
          <div className="card-body text-dark">
            <h4 className="card-title">
              Breakfast Pizza
          </h4>
            <h5 className="card-title">
              {this.props.cardInfo.worker}
            </h5>
            <p className="card-text secondary">
              Includingeggs, bacon, parmesan cheese and green onion on top of our House-made Pizza Bread
          </p>
            <ProgressBar />
            <AssignWorkers />
            <Assignment archiveJob={this.archiveJob} />
          </div>
          <PlayPause />
          <PriorityStars />
        </div>
      </div>
    )
  }
}

export default Card;