import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import ImageSignIn from '../../assets/images/background-signin.svg';

import './styles.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="signin-page">
      <Header />
      <main>
        <img src={ImageSignIn} alt="SignIn"/>
        <div className="authentication">
          <div>
            <h1>Possui cadastro?</h1>
            <p>Insira suas credenciais</p>
          </div>
          <form>
            <fieldset>
              <Input
                type="email"
                name="email"
                label="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </fieldset>
            <fieldset>
              <Input
                type="password"
                name="password"
                label="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </fieldset>
            <button type="submit">Entrar</button>
          </form>
          <Link to="/forgotten-password">Esqueceu sua senha?</Link>
          <Link to="/sign-up" className="highlight">Ainda não é cadastrado?</Link>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
