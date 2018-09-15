import React from 'react';
import placeholder from '../../placeholder.json';
import Card from '../Card';
import { Row, Col } from '../Grid';



class GameBoard extends React.Component {
  state = {
    pictures: placeholder,
    score: 0,
    best: 0
  };

  randomizer = (arr) => {
    let randomized = [];
    while (arr.length !== 0){
      let rng = Math.floor(Math.random() * arr.length);
      randomized.push(arr[rng]);
      arr.splice(rng, 1);
    }
    return randomized;
  }

  isLoser = (id, pictures) => {
    let selected = pictures.filter(p => p.id === id);
    //console.log(selected);
    if(selected[0].clicked){
      this.setState({ score: 0 });
      console.log('score has been reset', this.state.score);
    }
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


  handleClick = id => {
    let pictures = this.state.pictures;
    let score = this.state.score;

    this.isLoser(id, pictures);

    pictures.forEach(picture => {
      if(id === picture.id) {
        picture.clicked = true;
        console.log(picture);
      };
    });

    if(this.isWinner(pictures)){
      alert('You Win');
    }

    pictures = this.randomizer(pictures);
    this.setState({ score: score + 1});
    this.setState({ pictures: pictures });
    console.log('score',this.state.score);
  }

  render() {
    let rows = [];
    let cards = [];
    this.state.pictures.forEach((picture, i) => {      
      cards.push(
        <Col key={picture.id}>
          <Card 
            src={picture.url} 
            name={picture.id} 
            key={picture.id}
            clicked={picture.clicked}
            handleClick={this.handleClick}
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
      <div className="container">
        {rows}
      </div>
    );

  }
}

export default GameBoard;