import React, { useState ,useEffect } from 'react';

import './styles.css';

const SelectUfCity = () => {
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

  return (
    <>
      <fieldset>
        <label htmlFor="states">Estado</label>
        <select
          value={uf}
          onChange={event => setUf(event.target.value)}
          name="states"
          id="states"
        >
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
          name="cities"
          id="cities"
        >
          <option value="">Selecione uma cidade</option>
          {listCity.map((a) => (
            <option key={a.id} value={a.nome}>
              {a.nome}
            </option>
          ))}
        </select>
      </fieldset>
    </>
  );
};

export default SelectUfCity;
