import React, { useState, useEffect } from 'react';
import { Link }  from 'react-router-dom';

import './styles.css';

const Header = () => {

  const [header, setHeader] = useState('header');

  const handleScroll = () => {
    if (window.scrollY > 32) {
      return setHeader('headerLight');
    }
    return setHeader('headerDefault');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={header}>
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <nav className="menu">
        <ul>
          <li>
            <a href="#about">Sobre a iniciativa</a>
          </li>
          <li>
            <a href="#find-pets">Procurar pets</a>
          </li>
          <li>
            <Link to="/sign-in" className="sign-in">Entrar</Link>
          </li>
          <li>
            <Link to="/sign-up" className="sign-up">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
