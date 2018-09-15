import React, { Component } from 'react';
import Navbar from './components/Navbar';
import GameBoard from './components/GameBoard';
import './styles/css/styles.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GameBoard />
      </div>
    );
  }
}

export default App;
