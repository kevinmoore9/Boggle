import React from 'react';
import ReactDOM from 'react-dom';


import Dice from './dice';
import Die from './die';
import Words from './words';



class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      words: [],
      clicked: [],
      currentWord: [],
    }

    this.onClick = this.onClick.bind(this);
    this.onSubmitWord = this.onSubmitWord.bind(this);
  }

  isValidMove(idx) {
    let lastIdx = this.state.clicked[this.state.clicked.length - 1];

    return (
      this.state.clicked.length === 0 || (
        (lastIdx % 5) <= (idx % 5 + 1)
        && (lastIdx % 5) >= (idx % 5 - 1)
        && (lastIdx + 6) >= idx
        && (lastIdx - 6) <= idx
      )
    )
  }

  onClick(val, idx) {
    if (idx === this.state.clicked[this.state.clicked.length - 1]) {

      this.setState(prevState => {
        prevState.clicked.pop();
        prevState.currentWord.pop();

        return {
          clicked: prevState.clicked,
          currentWord: prevState.currentWord
        }
      })

    } else if (this.state.clicked.includes(idx)) {
       return null;

    } else if (this.isValidMove(idx)) {

      this.setState(prevState => (
        {
          currentWord: prevState.currentWord.concat([val]),
          clicked: prevState.clicked.concat([idx])
        }
      ))
    }
  }

  onSubmitWord(word) {
    let submittedWord = this.state.currentWord.join("");
    if (!this.state.words.includes(submittedWord)) {
      this.setState(prevState => (
        {
          words: prevState.words.concat([submittedWord]),
          clicked: [],
          currentWord: [],
        }
      ))
    } else {
      this.setState({
        clicked: [],
        currentWord: [],
      })
    }
  }

  render() {
    let Grid = Dice.map( (die, index) => {
      let letters = die.split("");
      let letter = letters[Math.floor(Math.random()*letters.length)];

      return (
        <Die
          letter={letter}
          key={index}
          index={index}
          onClick={this.onClick}
          clicked={this.state.clicked}
          />
      );

    });

    return (
      <div className="container">
        <div className="logo-container"><img src="./logo.png" className="logo"/></div>

        <div className="grid">
          {Grid}
        </div>

        <div className="currentWord">
          <p>Current Word:</p>
          <p className="word">{this.state.currentWord}</p>
          <button className="submitButton" onClick={this.onSubmitWord}>Submit Word</button>
        </div>

        <Words words={this.state.words} />
      </div>
    )
  }
}

module.exports = Game;
