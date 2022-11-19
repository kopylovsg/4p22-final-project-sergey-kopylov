import React from 'react';
import './Header.css'


const Header = (props) => {
  const {
    className = '',
  } = props;

  return (
    <header className={`${className} header`}>
      HEADER
    </header>
  );
};

export default Header;