import React from 'react';
import { Link } from 'react-router-dom';
import FormFinderPets from '../FormFinderPets';
import ImageFindPets from '../../assets/images/background-find-pets.svg';
import IconFindPets from '../../assets/images/find-pets-image.svg';
import './styles.css';

const FinderPets = () => {
  return (
    <section id="find-pets">
      <img src={ImageFindPets} alt="Procurar pets"/>

      <div id="find-pets-form">
        <div className="header">
          <div>
            <h1>Procurar Pets</h1>
            <p>Procure agora mesmo por um novo amigo!</p>
          </div>
          <img src={IconFindPets} alt="Procurar pets ícone"/>
        </div>

        <FormFinderPets />

        <div className="information">
          <p>
            Caso queira divulgar um pet para doação, pedimos uma coisa:
            <Link to="/sign-in" className="highlight"> Cadastre-se!</Link>
          </p>
          <p>
            <strong className="highlight">Por que essa condição?</strong> Olha,
            precisamos saber se essa iniciativa está, de fato, dando certo!
            Então há uma necessidade de obter esses dados de alguma forma,
            ou seja, pode ficar em paz que é por uma boa causa.
          </p>
        </div>
      </div>

    </section>
  );
};

export default FinderPets;
