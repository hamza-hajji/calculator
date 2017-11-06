import React from 'react';

export default () => {
  return (
    <div className=" col-8 col-sm-6 col-lg-4 mx-auto">
      <table>
        <thead>
          <tr>
            <td colSpan="4">
              <div id="result"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button className="num">1</button></td>
            <td><button className="num">2</button></td>
            <td><button className="num">3</button></td>
            <td><button id="plus">+</button></td>
          </tr>
          <tr>
            <td><button className="num">4</button></td>
            <td><button className="num">5</button></td>
            <td><button className="num">6</button></td>
            <td><button id="minus">-</button></td>
          </tr>
          <tr>
            <td><button className="num">7</button></td>
            <td><button className="num">8</button></td>
            <td><button className="num">9</button></td>
            <td><button id="times">&times;</button></td>
          </tr>
          <tr>
            <td><button>.</button></td>
            <td><button>0</button></td>
            <td><button>=</button></td>
            <td><button id="div">&#247;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
