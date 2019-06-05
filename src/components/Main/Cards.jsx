import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/126561.jpg'


export class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className={`cards ${window.innerWidth > 992 ? 'row' : ''}`}>
          {this.props.cardData.map(card => {
            return card.showCard && <div key={card.id}
              className={`col-12 col-md-3 ${this.props.blurCard === true && card.hovered === false ? "cardBlur" : "cardNoBlur"}`}
              onMouseEnter={() => this.props.onCardHover(card)} onMouseLeave={() => this.props.onCardLeave()}>
              <Card imgsrc={img1} cardInfo={card} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default Cards
