import React from 'react';

import classes from './home.module.css';

const Home = () => (
  <section className={classes.home}>
    <h2>Welcome to our page!</h2>
    <p>
      Welcome to Math Magicians, your online destination for math enthusiasts!
      Our website features a powerful calculator that can handle basic arithmetic operations,
      Plus, our calculator is fully responsive, so you can use it on any device,
      from desktops to smartphones.

      In addition to our calculator,
      we also provide daily inspiration in the form of a random quote
      These quotes come from famous mathematicians and
      other notable figures in the world of science and technology,
      and are sure to motivate and inspire you as you tackle even the toughest math problems.
    </p>
  </section>
);

export default Home;
