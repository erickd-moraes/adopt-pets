import React from 'react';
import Logo from '../../assets/images/logo.svg';
import iconLinkedIn from '../../assets/images/icon-linkedin.svg';
import iconGitHub from '../../assets/images/icon-github.svg';
import iconWhatssapp from '../../assets/images/icon-whatsapp.svg';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconInstagram from '../../assets/images/icon-instagram.svg';

import './styles.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <img src={Logo} alt="Logo Adopt Pets"/>
        </div>

        <div className="menu">
          <p>Quer entrar em contato com o criador ou conhecê-lo melhor?</p>
          <nav>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/erickd-mooraes/">
                  <img src={iconLinkedIn} alt="Ícone LinkedIn"/>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/erickd-moraes">
                  <img src={iconGitHub} alt="Ícone GitHub"/>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#whatsapp">
                  <img src={iconWhatssapp} alt="Ícone Whatsapp"/>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/erick.moraes.184/">
                  <img src={iconFacebook} alt="Ícone Facebook"/>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/erick.mooraes/">
                  <img src={iconInstagram} alt="Ícone Instagram"/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
