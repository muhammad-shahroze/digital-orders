import React, { Component } from 'react';
import './App.css';
import Title from './components/NavBar/Title'
import BurgerMenu from './components/NavBar/BurgerMenu';
import SettingsMenu from './components/NavBar/SettingsMenu';
import Cards from './components/Main/Cards'
import SearchBox from './components/NavBar/SearchBox';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Title />
        <SearchBox />
        <div>
          <BurgerMenu />
          <SettingsMenu />
        </div>
        <hr></hr>
        <section>
          <Cards />
        </section>
      </div>
    );
  }
}

export default App;
