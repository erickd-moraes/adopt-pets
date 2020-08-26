import React from 'react';
import { Link }  from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

import './styles.css';

const Header = (props) => {



  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo Adopt Pets"/>
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
            <Link to="sign-in" className="sign-in">Entrar</Link>
          </li>
          <li>
            <Link to="sign-up" className="sign-up">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
};

export default Header;
