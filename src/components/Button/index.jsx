import React from 'react';

import './styles.css';

const Button = ({ type, name }) => {
  return (
    <button type={type}>{name}</button>
  );
}

export default Button;
