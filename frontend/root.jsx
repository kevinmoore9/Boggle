import React from 'react';
import ReactDOM from 'react-dom';

import Game from './game';

class Root extends React.Component {
  render() {
    return(
      <div className="main">
        <Game />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
