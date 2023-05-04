import React from 'react';
import Calculator from './components/calculator';
import Quote from './components/quote';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Calculator />
      <Quote />
    </header>
  </div>
);

export default App;
