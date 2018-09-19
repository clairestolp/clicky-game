import React from 'react';
import placeholder from '../../placeholder.json';
import Card from '../Card';
import { Row, Col } from '../Grid';
import Navbar from '../Navbar';
import {cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11} from '../../images';

class GameBoard extends React.Component {
  state = {
    pictures: placeholder,
    score: 0,
    best: 0,
    message: 'Click to Begin'
  };

  randomizer = (arr) => {
    let randomized = [];
    while (arr.length !== 0){
      let rng = Math.floor(Math.random() * arr.length);
      randomized.push(arr[rng]);
      arr.splice(rng, 1);
    }
    console.log(randomized)
    return randomized;
  }

  resetGame = pictures => {
    pictures.forEach(picture => {
      picture.clicked = false;
    });
    this.setState({ pictures: pictures });
  }

  isWinner = pictures => {
    let win = true;
    pictures.forEach(p => {
      if(p.clicked === false) {
        win = false;
      }
    });
    return win;
  }

  checkAnswer = (id, pictures) => {
    let selected = pictures.filter(p => p.id === id);
    let score = this.state.score;

    if(selected[0].clicked){

      this.setState({ message: 'Incorrect!' });
      this.setState({ score: 0 });
      this.resetGame(this.state.pictures);

      if (this.state.best < score) {
        this.setState({ best: score});
      }
      
    }else{
      this.setState({ message: 'Correct!' });
      this.setState({ score: score + 1});
    }
  }

  handleClick = id => {
    let pictures = this.state.pictures;

    this.checkAnswer(id, pictures);

    pictures.forEach(picture => {
      if(id === picture.id) {
        picture.clicked = true;
        console.log(picture);
      };   
    });

    if(this.isWinner(pictures)){
      alert('You Win');
      window.location.reload;
      this.resetGame(this.state.pictures);
    }

    pictures = this.randomizer(pictures);
    this.setState({ pictures: pictures });
  }


  render() {
    let rows = [];
    let cards = [];
    const cats = [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11];
    this.state.pictures.forEach((picture, i) => {      
      cards.push(
        <Col key={picture.id}>
          <Card 
            src={cats[picture.id]} 
            name={picture.id} 
            key={picture.id}
            clicked={picture.clicked}
            handleClick={this.handleClick}
            title={picture.title}
          />
        </Col>
      );

      if ((i + 1) % 4 === 0) {
        let row = <Row key={i} > {cards} </Row>;
        rows.push(row);
        cards = [];
      }

    });

    return (
      <div>
        <Navbar 
          score={this.state.score} 
          best={this.state.best} 
          message={this.state.message} 
        />

        <div className="container">
            {rows}
        </div>
      </div>
    );

  }
}

export default GameBoard;