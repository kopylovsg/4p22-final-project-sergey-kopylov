import React from 'react';
import './Select.css'

const Select = (props) => {
  const {
    className = '',
    name,
    options,
  } = props

  return (
    <div className={`${className} select`}>
      <select
      name={name}/>

    </div>
  );
};

export default Select;