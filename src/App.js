import React from 'react';
import './App.css';
import Title from './components/NavBar/Title'
import BurgerMenu from './components/NavBar/BurgerMenu';
import SettingsMenu from './components/NavBar/Settings';
import Cards from './components/Main/Cards'

function App() {
  return (
    <div className="App">
      <Title />
      <BurgerMenu />
      <SettingsMenu />
      <hr></hr>
      <Cards />
    </div>
  );
}

export default App;
