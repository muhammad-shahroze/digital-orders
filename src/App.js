import React from 'react';
import './App.css';
import Title from './components/NavBar/Title'
import BurgerMenu from './components/NavBar/BurgerMenu';
import SettingsMenu from './components/NavBar/Settings';

function App() {
  return (
    <div className="App">
      <Title />
      <BurgerMenu />
      <SettingsMenu />
      <hr></hr>
    </div>
  );
}

export default App;
