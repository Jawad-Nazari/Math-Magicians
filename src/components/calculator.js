import React from 'react';
import './calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calc-input-group">
        <input className="calc-input" type="text" value="0" readOnly />
      </div>
      <ul className="buttons-container">
        <li className="button-row">
          <button className="calc-btn" type="button">
            AC
          </button>
          <button className="calc-btn" type="button">
            +/-
          </button>
          <button className="calc-btn" type="button">
            %
          </button>
          <button className="calc-btn btn-operation" type="button">
            &#247;
          </button>
        </li>
        <li className="button-row">
          <button className="calc-btn" type="button">
            7
          </button>
          <button className="calc-btn" type="button">
            8
          </button>
          <button className="calc-btn" type="button">
            9
          </button>
          <button className="calc-btn btn-operation" type="button">
            x
          </button>
        </li>
        <li className="button-row">
          <button className="calc-btn" type="button">
            4
          </button>
          <button className="calc-btn" type="button">
            5
          </button>
          <button className="calc-btn" type="button">
            6
          </button>
          <button className="calc-btn btn-operation" type="button">
            -
          </button>
        </li>
        <li className="button-row">
          <button className="calc-btn" type="button">
            3
          </button>
          <button className="calc-btn" type="button">
            2
          </button>
          <button className="calc-btn" type="button">
            1
          </button>
          <button className="calc-btn btn-operation" type="button">
            +
          </button>
        </li>
        <li className="button-row">
          <button className="calc-btn btn-zero" type="button">
            0
          </button>
          <button className="calc-btn" type="button">
            .
          </button>
          <button className="calc-btn btn-operation" type="button">
            =
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Calculator;
