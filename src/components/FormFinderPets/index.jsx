import React, { useState } from 'react';

import Select from '../../components/Select';
import SelectUfCity from '../SelectUfCity';

import './styles.css';

const FormFinderPets = () => {
  const [species, setSpecies] = useState('');
  const [port, setPort] = useState('');

  const optionsSpecies = [
    { value: '', name: 'Selecione uma espécie' },
    { value: 'cachorro', name: 'Cachorro'},
    { value: 'gato', name: 'Gato' },
    { value: 'outro', name: 'Outro' }
  ];

  const optionsPort = [
    { value: '', name: 'Selecione o porte do animal' },
    { value: 'pequeno', name: 'Pequeno'},
    { value: 'médio', name: 'Médio' },
    { value: 'grande', name: 'Grande' },
  ];

  return (
    <form>
      <div>
        <fieldset>
          <Select
            label="Espécie"
            name="species"
            id="species"
            options={optionsSpecies}
            value={species}
            onChange={(event) => setSpecies(event.target.value)}
            />
        </fieldset>

        <fieldset>
          <Select
            label="Porte do animal"
            name="port"
            id="port"
            options={optionsPort}
            value={port}
            onChange={event => setPort(event.target.value)}
          />
        </fieldset>

        <SelectUfCity />
      </div>

      <button type="submit">Procurar</button>
    </form>

  );
};

export default FormFinderPets;
