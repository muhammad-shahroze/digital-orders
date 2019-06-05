import React, { Component } from 'react';
import './App.css';
import Title from './components/NavBar/Title'
import BurgerMenu from './components/NavBar/BurgerMenu';
import SettingsMenu from './components/NavBar/SettingsMenu';
import Cards from './components/Main/Cards'
import SearchBox from './components/NavBar/SearchBox';


class App extends Component {
  state = {
    cardData: [{ id: 1, hovered: false, worker: "Steve Brown", showCard: true },
    { id: 2, hovered: false, worker: "Jim Tots", showCard: true },
    { id: 3, hovered: false, worker: "Caroline Jenkins", showCard: true },
    { id: 4, hovered: false, worker: "Tom Parker", showCard: true }],
    currentText: "",
    blurCard: false,
  }


  updateCurrentText = (event) => {
    const newText = event.target.value
    const newCardData = this.state.cardData
    newCardData.map(data => {
      if (data.worker.includes(newText)) {
        return data.showCard = true;
      }
      else {
        return data.showCard = false;
      }
    })
    this.setState({
      currentText: newText,
      cardData: newCardData
    })
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
      <div className="App" >
        <Title />
        <SearchBox updateCurrentText={this.updateCurrentText} />
        <div>
          <BurgerMenu />
          <SettingsMenu />
        </div>
        <hr></hr>
        <section>
          <Cards cardData={this.state.cardData} searchedText={this.state.currentText} onCardHover={this.onCardHover} onCardLeave={this.onCardLeave} blurCard={this.state.blurCard} />
        </section>
      </div>
    );
  }
}

export default App;
