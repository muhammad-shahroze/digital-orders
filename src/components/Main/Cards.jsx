import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/95815696-to-do-list-seamless-pattern-background-business-flat-vector-illustration-checklist-task-list-symbol-.jpg'


class Cards extends Component {
  render() {
    const cardData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    return (
      <div className="container">
        <div className="cards row">
          {cardData.map(card => {
            return <Card imgsrc={img1} key={card.id} />
          })}
        </div>
      </div>
    )
  }
}

export default Cards
