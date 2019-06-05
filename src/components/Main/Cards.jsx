import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/126561.jpg'


export class Cards extends Component {

  state = {
    blurCard: false,
    cardData: [{ id: 1, hovered: false }, { id: 2, hovered: false }, { id: 3, hovered: false }, { id: 4, hovered: false }],
  }

  onCardHover = (card) => {
    let newCardData = this.state.cardData
    newCardData.map(c => {
      return c.id === card.id ? c.hovered = true : c.hovered = false
    })
    this.setState({
      blurCard: true,
      cardData: newCardData
    })
  }

  onCardLeave = () => {
    let newCardData = this.state.cardData
    newCardData.map(c => {
      return c.hovered = false
    })
    this.setState({
      blurCard: false,
      cardData: newCardData
    })
  }

  render() {

    return (
      <div className="container">
        <div className="cards row">
          {this.state.cardData.map(card => {
            return <div key={card.id} className={this.state.blurCard === true && card.hovered === false ? "cardBlur" : "cardNoBlur"} onMouseEnter={() => this.onCardHover(card)} onMouseLeave={() => this.onCardLeave(card)}>
              <Card imgsrc={img1} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default Cards
