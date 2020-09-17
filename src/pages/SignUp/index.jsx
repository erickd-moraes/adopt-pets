import React, { useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import SelectUfCity from '../../components/SelectUfCity';
import Button from '../../components/Button';

import './styles.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <div id="signup-page">
      <Header />
      <main>
        <section className="title">
          <h1>Ajude pets a encontrarem um novo lar</h1>
          <span></span>
        </section>
        <section className="create-user">
          <form>
            <fieldset>
              <Input
                type="text"
                name="name"
                label="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <Input
                type="text"
                name="whatsapp"
                label="Whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </fieldset>

            <SelectUfCity />

            <fieldset>
              <Input
                type="email"
                name="email"
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <Input
                type="password"
                name="password"
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <Input
                type="password"
                name="password"
                label="Confirme sua senha"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </fieldset>

            <Button type="submit" name="Cadastrar"/>

            <a href="/sign-in">Já possui cadastro? Faça o login</a>
          </form>
        </section>
      </main>
    </div>
  );
}

export default SignUp;
