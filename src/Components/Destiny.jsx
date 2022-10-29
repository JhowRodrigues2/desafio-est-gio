import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";

import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Destiny = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCoutries, setSelectedCountries] = useState([]);
  const [cityFilter, setcityFilter] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    const url = "https://amazon-api.sellead.com/country";
    const fetchCountries = async () => {
      const res = await fetch(url, { method: "GET" });
      const newCoutries = await res.json();

      const multiCountries = newCoutries.map(({ name, code }) => ({
        label: name,
        value: code,
      }));
      setCountries(multiCountries);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const url = "https://amazon-api.sellead.com/city";

    const fetchCities = async () => {
      const res = await fetch(url, { method: "GET" });
      const newCities = await res.json();

      const multiCities = newCities.map(({ name, country_code }) => ({
        label: name,
        value: country_code,
      }));
      setCities(multiCities);
    };

    fetchCities();
  }, []);
  // Função onde será capaz salvar set state selected o Value da Cidade Selecionada.
  function handleSelect(value) {
    value.map((country) => setSelectedCountries(country.value));
  }

  //Função que irá comparará o value da cidade com o value do país
  function valida(value) {
    return value.value == selectedCoutries;
  }

  //effect capaz de filtrar a cidade de acordo com o value do país.

  useEffect(() => {
    setcityFilter(cities.filter(valida));
  }, [selectedCoutries]);

  return (
    <div className="bg-[#e6e6e6] flex flex-col h-[60vh] w-[450px]  rounded-lg gap-3 p-10">
      <h1 className="font-bold text-lg text-[#1E90FF]">Selecione Destino</h1>

      <Select
        className="border-[#1E90FF] shadow shadow-blue-500/40 "
        options={countries}
        isClearable={true}
        onChange={handleSelect}
        isMulti={true}
        components={animatedComponents}
        placeholder={"Selecione um ou mais países"}
      />
      <Select
        className="border-[#1E90FF] shadow shadow-blue-500/40"
        options={cityFilter}
        isClearable={true}
        isMulti={true}
        components={animatedComponents}
        placeholder={"Selecione um ou mais cidades"}
        onRemove={(e) => setSelectedCities(e)}
        onChange={(e) => setSelectedCities(e)}
      />
      <button className="bg-[#1E90FF] w-40 text-white h-10 rounded-lg hover:bg-[#316aa3] hover:transition duration-150">
        Salvar Opções
      </button>
    </div>
  );
};

export default Destiny;
