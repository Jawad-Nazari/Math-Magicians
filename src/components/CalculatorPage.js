import React from 'react';

import Calculator from './calculator';
import Card from './UI/Card';
import classes from './CalculatorPage.module.css';

const CalculatorPage = () => (
  <section className={classes.calculator_section}>
    <Card extraclass={classes.calculatorPage_details}>
      <h3>Lets do some Math!</h3>
      <p>
        Using Our nice calculator that can handle basic arithmetic operations
      </p>
    </Card>
    <Calculator />
  </section>
);

export default CalculatorPage;
