import React from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import FinderPets from '../../components/FinderPets';
import Footer from '../../components/Footer';

import './styles.css';

const Home = () => {
  return (
    <div id="home-page">
      <Header/>
      <main>
        <About />
        <FinderPets />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
