import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ImageAbout from '../../assets/images/background-about.svg';
import ImageFindPets from '../../assets/images/background-find-pets.svg';
import IconFindPets from '../../assets/images/find-pets-image.svg';
import FormFinderPets from '../../components/FormFinderPets';
import Footer from '../../components/Footer';

import './styles.css';
import './responsive.css';

const Home = () => {

  return (
    <div id="home-page">
      <Header/>

      <main>
      <section id="about">
          <div>
            <h1>Sobre a iniciativa</h1>
            <p>
              O <strong className="highlight">AdoptPets</strong> surgiu com o intuito único e genuíno de conseguir <strong>ajudar
              animais de rua, maltratados ou abandonados a encontrarem um lar onde
              serão amados, recebam muito carinho e sejam  cuidados da maneira que merecem!</strong>
            </p>
            <p>
              <strong className="highlight">E que forma seria essa?</strong> Uma plataforma online, servindo como um facilitador,
              possibilitando a conexão entre pessoas que simpatizam com esse pensamento e os
              pets que tanto precisam desse âmparo.
            </p>
          </div>

          <img src={ImageAbout} alt="Sobre a iniciativa"/>
        </section>

        <section id="find-pets">
          <img src={ImageFindPets} alt="Procurar pets"/>

          <div>
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
      </main>

      <Footer />
    </div>
  );
};

export default Home;
