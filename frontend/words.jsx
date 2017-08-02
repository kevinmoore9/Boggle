import React from 'react';
import ReactDOM from 'react-dom';


class Words extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: this.props.words
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      words: newProps.words
    })
  }

  score(word) {
    if (word.length < 3) {
      return 0;
    } else if (word.length < 5) {
      return 1;
    } else if (word.length < 7) {
      return word.length - 3;
    } else if (word.length === 7) {
      return 5;
    } else {
      return 11;
    }
  }

  render() {
    let score = 0;
    let Words = this.state.words.map(word => {
      score += this.score(word);
      return(
        <tr>
          <th className="th-word">{word}</th>
          <th>{this.score(word)}</th>
        </tr>
      )
    });

    return (
      <table className="words">
        <tbody>

        <tr className="headers">
          <th className="th-word">Word</th>
          <th>Score</th>
        </tr>

        { Words }

        <tr className="headers">
          <th className="th-word">Total:</th>
          <th>{score}</th>
        </tr>
      </tbody>
      </table>
    )
  }
}

module.exports = Words;
