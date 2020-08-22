import React from 'react';
import Select from '../../components/Select';

import './styles.css';

const FormFinderPets = () => {
  const optionsSpecies = [
    { value: '', name: 'Selecione uma espécie' },
    { value: 1, name: 'Cachorro'},
    { value: 2, name: 'Gato' },
    { value: 3, name: 'Outro' }
  ];

  const optionsPort = [
    { value: '', name: 'Selecione o porte do animal' },
    { value: 1, name: 'Pequeno'},
    { value: 2, name: 'Médio' },
    { value: 2, name: 'Grande' },
  ];

  const optionsStates = [
    { value: '', name: 'Selecione um estado' },
  ];

  const optionsCities = [
    { value: '', name: 'Selecione uma cidade' },
  ];

  // const handleChangeSelectCity = (value) => {
  //   console.log(value);
  // }

  return (
    <form>
      <div>
        <fieldset>
          <Select label="Espécie" name="species" options={optionsSpecies}/>
        </fieldset>
        <fieldset>
          <Select label="Porte do animal" name="port" options={optionsPort}/>
        </fieldset>
        <fieldset>
          <Select label="Estado" name="states" options={optionsStates}/>
        </fieldset>
        <fieldset>
          <Select label="Cidade" name="cities" options={optionsCities}/>
        </fieldset>
      </div>

      <button type="submit">Procurar</button>
    </form>

  );
};

export default FormFinderPets;
