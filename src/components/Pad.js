import React from 'react';

export default ({
  onClick,
  onOpClick,
  performCalc,
  addDecimal,
  onClickParen,
  clear,
  currOp
}) => {
  return (
    <div className=" col-8 col-sm-6 col-lg-4 mx-auto">
      <table>
        <thead>
          <tr>
            <td colSpan="4">
              <input type="text" id="result" value={currOp.length ?  currOp : 0} disabled/>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button onClick={clear}>C</button></td>
            <td><button value="(" onClick={onClickParen}>(</button></td>
            <td><button value=")" onClick={onClickParen}>)</button></td>
            <td><button value="-" onClick={onOpClick}>-</button></td>
          </tr>
          <tr>
            <td><button value="1" onClick={onClick}>1</button></td>
            <td><button value="2" onClick={onClick}>2</button></td>
            <td><button value="3" onClick={onClick}>3</button></td>
            <td rowSpan="2"><button value="+" onClick={onOpClick}>+</button></td>
          </tr>
          <tr>
            <td><button value="4" onClick={onClick}>4</button></td>
            <td><button value="5" onClick={onClick}>5</button></td>
            <td><button value="6" onClick={onClick}>6</button></td>
          </tr>
          <tr>
            <td><button value="7" onClick={onClick}>7</button></td>
            <td><button value="8" onClick={onClick}>8</button></td>
            <td><button value="9" onClick={onClick}>9</button></td>
            <td><button value="*" onClick={onOpClick}>&times;</button></td>
          </tr>
          <tr>
            { /*add validation to decimal, prevent from adding after operation*/ }
            <td><button value="." onClick={addDecimal}>.</button></td>
            <td><button  value="0" onClick={onClick}>0</button></td>
            <td><button onClick={performCalc}>=</button></td>
            <td><button value="/" onClick={onOpClick}>&#247;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
