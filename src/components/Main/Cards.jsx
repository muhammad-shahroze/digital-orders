import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/95815696-to-do-list-seamless-pattern-background-business-flat-vector-illustration-checklist-task-list-symbol-.jpg'


class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center cards">
        <div className="col-md-2 card-title">
          <Card imgsrc={img1} />
        </div>
        <div className="col-md-2 card-title">
          <Card imgsrc={img1} />
        </div>
        <div className="col-md-2 card-title">
          <Card imgsrc={img1} />
        </div>
        <div className="col-md-2 card-title">
          <Card imgsrc={img1} />
        </div>
        <div className="col-md-2 card-title">
          <Card imgsrc={img1} />
        </div>
      </div>
    )
  }
}

export default Cards
