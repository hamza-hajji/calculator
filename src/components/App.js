import React, { Component } from 'react';
import '../App.css';

import Header from './Header';
import Pad from './Pad';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Pad />
        </div>
      </div>
    );
  }
}

export default App;
