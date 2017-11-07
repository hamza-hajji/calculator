import React, { Component } from 'react';
import '../App.css';

import Header from './Header';
import Pad from './Pad';

class App extends Component {
  state = {
    currOp: '',
  }

  onClick({target: {value}}) {
    if (this.state.currOp === 'Syntax Error!') {
      return this.setState({
        currOp: `${value}`
      });
    }

    this.setState({
      currOp: `${this.state.currOp}${value}`
    });
  }

  onOpClick({target: {value}}) {
    let lastChar = this.state.currOp[this.state.currOp.length - 1];
    if ("*-+/".indexOf(lastChar) === -1) {
      this.setState({
        currOp: `${this.state.currOp}${value}`
      });
    }
  }

  addDecimal({target: {value}}) {
    let lastChar = this.state.currOp[this.state.currOp.length - 1];
    if (lastChar !== '.') {
      this.setState({
        currOp: `${this.state.currOp}${value}`
      });
    }
  }

  clear() {
    this.setState({
      currOp: ''
    });
  }

  performCalc() {
    try {
      if (/[\(\)]/.test(this.state.currOp)) {
        let numOfLeftParens = this.state.currOp.match(/\(/g).length;
        let numOfRightParens = this.state.currOp.match(/\)/g).length;
        if (numOfRightParens !== numOfLeftParens) throw new Error();
      }
      this.setState({
        currOp: Number.isInteger(eval(this.state.currOp)) ? String(eval(this.state.currOp)) : eval(this.state.currOp).toFixed(4)
      });
    } catch (e) {
      this.setState({
        currOp: 'Syntax Error!'
      });
    }
  }

  onClickParen({target: {value}}) {
    let lastChar = this.state.currOp[this.state.currOp.length - 1];
    if (
      value === '('
      && (this.state.currOp.length === 0 || "*-+/".indexOf(lastChar) !== -1)) {
      this.setState({
        currOp: `${this.state.currOp}${value}`
      });
    }

    if (
      value === ')'
      && this.state.currOp.indexOf('(') !== -1
      && "*-+/".indexOf(lastChar) === -1) {
      this.setState({
        currOp: `${this.state.currOp}${value}`
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Pad
            clear={this.clear.bind(this)}
            onClickParen={this.onClickParen.bind(this)}
            addDecimal={this.addDecimal.bind(this)}
            onClick={this.onClick.bind(this)}
            onOpClick={this.onOpClick.bind(this)}
            performCalc={this.performCalc.bind(this)}
            {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
