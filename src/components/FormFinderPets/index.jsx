import React, { useState, useEffect } from 'react';
import Select from '../../components/Select';

import './styles.css';

const FormFinderPets = () => {

  const [species, setSpecies] = useState('');
  const [port, setPort] = useState('');
  const [uf, setUf] = useState('');
  const [listUf, setListUf] = useState([]);
  const [city, setCity] = useState('');
  const [listCity, setListCity] = useState([]);

  function loadUf() {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf([...data]);
      });
  }

  function loadCity(id) {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListCity([...data]);
      });
  }

  useEffect(() => {
    loadUf();
  }, []);

  useEffect(() =>{
    if (uf) {
      loadCity(uf);
    }
  }, [uf]);

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
            options={optionsSpecies}
            value={species}
            onChange={(event) => setSpecies(event.target.value)}
            />
        </fieldset>

        <fieldset>
          <Select
            label="Porte do animal"
            name="port"
            options={optionsPort}
            value={port}
            onChange={event => setPort(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="states">Estado</label>
          <select
            value={uf}
            onChange={event => setUf(event.target.value)}
            name="states">
            <option value="">Selecione um estado</option>
              {listUf.map((a) => (
               <option key={a.id} value={a.id}>
                  {a.sigla} - {a.nome}
               </option>
              ))}
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="cities">Cidade</label>
          <select
            value={city}
            onChange={event => setCity(event.target.value)}
            name="cities">
            <option value="">Selecione uma cidade</option>
            {listCity.map((a) => (
              <option key={a.id} value={a.nome}>
                {a.nome}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      <button type="submit">Procurar</button>
    </form>

  );
};

export default FormFinderPets;
