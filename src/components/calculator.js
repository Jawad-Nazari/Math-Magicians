import { useState } from 'react';
import calculate from './logic/calculate';
import './calculator.css';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const clickHandler = (e) => {
    const result = calculate(state, e.target.textContent);
    setState((prevState) => ({ ...prevState, ...result }));
  };
  const { total, next } = state;

  return (
    <div className="calculator">
      <p className="calc-result">{next || total || 0}</p>
      <ul className="buttons-container">
        <li className="button-row">
          <button className="calc-btn" type="button" onClick={clickHandler}>
            AC
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            +/-
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            %
          </button>
          <button className="calc-btn btn-operation" type="button" onClick={clickHandler}>
            &#247;
          </button>
        </li>
        <li className="button-row">
          <button className="calc-btn" type="button" onClick={clickHandler}>
            7
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            8
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            9
          </button>
          <button className="calc-btn btn-operation" type="button" onClick={clickHandler}>
            x
          </button>
        </li>
        <li className="button-row">
          <button className="calc-btn" type="button" onClick={clickHandler}>
            4
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            5
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            6
          </button>
          <button className="calc-btn btn-operation" type="button" onClick={clickHandler}>
            -
          </button>
        </li>
        <li className="button-row">
          <button className="calc-btn" type="button" onClick={clickHandler}>
            3
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            2
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            1
          </button>
          <button className="calc-btn btn-operation" type="button" onClick={clickHandler}>
            +
          </button>
        </li>
        <li className="button-row">
          <button className="calc-btn btn-zero" type="button" onClick={clickHandler}>
            0
          </button>
          <button className="calc-btn" type="button" onClick={clickHandler}>
            .
          </button>
          <button className="calc-btn btn-operation" type="button" onClick={clickHandler}>
            =
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Calculator;
