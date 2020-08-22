import React from 'react';

import './styles.css';

const Select = ({ name, label, options }) => {
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <select name={name}>

          {options.map((option) => {
            return <option value={option.value}>{option.name}</option>
          })}
        </select>
    </>
  );
}

export default Select;
