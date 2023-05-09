/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ extraclass = '', children }) => (
  <div className={`${extraclass}`}>
    {children}
  </div>
);

Card.propTypes = {
  extraclass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  extraclass: '',
};

export default Card;
