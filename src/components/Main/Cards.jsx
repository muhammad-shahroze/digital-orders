import React, { Component } from 'react';
import Card from './CardUI';

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center cards">
        <div className="col-md-2 card-title">
          <Card />
        </div>
        <div className="col-md-2 card-title">
          <Card />
        </div>
        <div className="col-md-2 card-title">
          <Card />
        </div>
        <div className="col-md-2 card-title">
          <Card />
        </div>
      </div>
    )
  }
}

export default Cards
