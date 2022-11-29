import React from 'react';
import './Footer.css'

const Footer = (props) => {
  const {
    className = ''
  } = props
  return (
    <footer className={`${className} footer`}>
      тут много информации о компании контакты. почта. телефоны.
    </footer>
  );
};

export default Footer;