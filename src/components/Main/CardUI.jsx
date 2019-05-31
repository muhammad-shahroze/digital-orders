import React from 'react';
import "./Card-Style.css"
import ProgressBar from '../Workers/ProgressBar';
import PriorityStars from '../Workers/PriorityStars';
import Assignment from '../Workers/Assignment';


const Card = props => {
  return (
    <div className="card text-left">
      <div className="overflow">
        <img src={props.imgsrc} alt="item 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">
          Order Name
        </h4>
        <h5 className="card-title">
          Worker Name
        </h5>
        <p className="card-text secondary">
          Please include some description Here!
        </p>
        <ProgressBar />
        <Assignment />
        <div className="play-pause">
          <input type="checkbox" value="" id="playPauseCheckbox" name="playPauseCheckbox" />
          <label htmlFor="playPauseCheckbox"></label>
        </div>
        <PriorityStars />
      </div>
    </div>
  )
}

export default Card;