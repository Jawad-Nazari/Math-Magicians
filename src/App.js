/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/UI/Layout';
import Quote from './components/quote';
import Home from './components/home';
import CalculatorPage from './components/CalculatorPage';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Layout>

    </header>
  </div>
);

export default App;
