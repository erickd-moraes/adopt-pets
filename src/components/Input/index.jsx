import React from 'react';

import './styles.css';

const Input = ({name, label, type}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} />
    </>
  );
};

export default Input;
