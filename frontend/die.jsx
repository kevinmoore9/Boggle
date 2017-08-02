import React from 'react';
import ReactDOM from 'react-dom';

class Die extends React.Component {
  constructor(props) {
    super(props)
    this.letter = this.props.letter === "q" ? "Qu" : this.props.letter.toUpperCase();
    this.idx = this.props.index;
    this.onClick = this.props.onClick;

    this.state = {
      isClicked: false,
    }
  }

  componentWillReceiveProps(newProps) {
      this.setState({
        isClicked: newProps.clicked.includes(this.idx)
      })
  }

  render() {
    return(
      <div
        className = {this.state.isClicked ? "die-clicked" : "die"}
        onClick = {() =>(this.onClick(this.letter, this.idx))}
        >
        {this.letter}
      </div>
    );
  }
}

module.exports = Die;
