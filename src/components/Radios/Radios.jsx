import React from 'react';

const Radios = (props) => {
  const {
    className = '',
    name,
    items = [],
    label,
    onChange,
  } = props;


  return (
    <div className="radios">
      <div className="radios__label">{label}</div>
      <ul className="radios__list">
        {items.map(({ value, label, isChecked }) => (
          <li className="radios__item" key={value}>
            <label className="radios__radio">
              <input
                className="radios__input"
                id={value}
                name={name}
                value={value}
                defaultChecked={isChecked}
                type="radio"
              />
              <span className="radios__control-label">{label}</span>
            </label>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Radios;