import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import './styles/css/styles.css';
import './styles/css/animate.css';


class App extends Component {
  render() {
    return (
      <div>
        <GameBoard />
      </div>
    );
  }
}

export default App;
