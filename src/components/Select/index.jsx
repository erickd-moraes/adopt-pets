import React from 'react';

import './styles.css';

const Select = ({ name, label, options }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name}>

        {options.map((option, index) => {
          return <option key={index} value={option.value}>{option.name}</option>
        })}
      </select>
    </>
  );
}

export default Select;
