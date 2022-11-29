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
    error = '',
    onChange,
  } = props;

  const isTextArea = type === 'textarea';
  const Component = isTextArea ? 'textarea' : 'input'

  const  onlyTextAreaProps = {};
  const onlyInputProps = { type };
  const extraProps = isTextArea ? onlyTextAreaProps : onlyInputProps;

  const hasError = Boolean(error)

  return (
    <>
      <label
        className={`${isLabelHidden ? 'visually-hidden' : ''}`}
        htmlFor={name}
      >
        {label}
      </label>
      <Component
        className={`${className} input ${hasError ? 'is-invalid' : ''}`}
        name ={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...extraProps}
      />
      {hasError && <div className="error">{error}</div>}
    </>
  );
};

export default Input;