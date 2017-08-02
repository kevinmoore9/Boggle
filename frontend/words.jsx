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

  render() {

    return (
      <table className="words">
        <tbody>

        <tr className="headers">
          <th>Word</th>
          <th>Score</th>
        </tr>

        <tr className="headers">
          <th>Total:</th>
          <th>dummy score</th>
        </tr>
      </tbody>
      </table>
    )
  }
}

module.exports = Words;
