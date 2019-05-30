import React from 'react';
import img1 from '../assets/95815696-to-do-list-seamless-pattern-background-business-flat-vector-illustration-checklist-task-list-symbol-.jpg'
import "./Card-Style.css"


const Card = props => {
  return (
    <div className="card text-left">
      <div className="overflow">
        <img src={img1} alt="item 1" className="card-img-top" />
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
        <a href="#" className="btn btn-outline-success">Go Anywhere</a>
      </div>
    </div>
  )
}

export default Card;