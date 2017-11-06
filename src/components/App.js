import React, { Component } from 'react';
import '../App.css';

import Header from './Header';
import Pad from './Pad';

class App extends Component {
  state = {
    currOp: '',
  }

  onClick(e) {
    this.setState({
      currOp: `${this.state.currOp}${e.target.value}`
    });
  }

  addDecimal(e) {
    let lastChar = this.state.currOp[this.state.currOp.length - 1]
    if ("*-+/".indexOf(lastChar) === -1) {
      this.setState({
        currOp: `${this.state.currOp}${e.target.value}`
      });
    }
  }

  performCalc() {
    this.setState({
      currOp: String(eval(this.state.currOp))
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Pad
            addDecimal={this.addDecimal.bind(this)}
            onClick={this.onClick.bind(this)}
            performCalc={this.performCalc.bind(this)}
            {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
