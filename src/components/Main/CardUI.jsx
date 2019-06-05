import React from 'react';
import "./Card-Style.css"
import ProgressBar from '../Workers/ProgressBar';
import PriorityStars from '../Workers/PriorityStars';
import Assignment from '../Workers/Assignment';
import PlayPause from '../Workers/PlayPause';
import AssignWorkers from '../Workers/AssignWorkers';


const Card = props => {
  return (
    <div className="">
      <div className={`card ${window.innerWidth <= 992 ? 'w-100' : ''}`}>
        <div className="overflow">
          <img src={props.imgsrc} alt="item 1" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">
            Breakfast Pizza
        </h4>
          <h5 className="card-title">
            {props.cardInfo.worker}
          </h5>
          <p className="card-text secondary">
            Includingeggs, bacon, parmesan cheese and green onion on top of our House-made Pizza Bread
        </p>
          <ProgressBar />
          <AssignWorkers />
          <Assignment />
        </div>
        <PlayPause />
        <PriorityStars />
      </div>
    </div>
  )
}

export default Card;