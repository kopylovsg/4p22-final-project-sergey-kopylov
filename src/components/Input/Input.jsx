import React from 'react';
import './Input.css'

const Input = (props) => {
  const {
    className = '',
    placeholder,
    title,
    name,
    id = name,
    label,
    isLabelHidden = true,
    type = 'text',
    value,
    onChange,
  } = props;

  const isTextArea = type === 'textarea';

  const Component = isTextArea ? 'textarea' : 'input'

  return (
    <>
      <label
        className={`${isLabelHidden ? 'visually-hidden' : ''}`}
        htmlFor={name}
      >
        {label}
      </label>
      <Component
        className={`${className} input`}
        name ={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;