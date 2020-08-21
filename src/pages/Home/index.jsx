import React from 'react';
import Header from '../../components/Header';
import ImageAbout from '../../assets/images/background-about.svg';

import './styles.css';

const Home = () => {
  return (
    <div id="home-page">
      <Header />

      <main>
        <section id="about">
          <div>
            <h1>Sobre a iniciativa</h1>
            <p>
              O <strong className="highlight">AdoptPets</strong> surgiu com o intuito único e genuíno de conseguir <strong>ajudar
              animais de rua, maltratados ou abandonados a encontrarem um lar onde
              serão amados, recebam muito carinho e sejam  cuidados da maneira que merecem!</strong>
              <br/>
              <strong className="highlight">E que forma seria essa?</strong> Uma plataforma online, servindo como um facilitador,
              possibilitando a conexão entre pessoas que simpatizam com esse pensamento e os
              pets que tanto precisam desse âmparo.
            </p>
          </div>

          <img src={ImageAbout} alt="Sobre a iniciativa"/>
        </section>
      </main>
    </div>
  );
};

export default Home;
