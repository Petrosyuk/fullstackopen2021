import React, { useState, useEffect } from "react";
import axios from "axios";
import { CountryList } from "./Components/countries";

function App() {
  const [filterCountry, setFilterCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSeachChange = (event) => setFilterCountry(event.target.value);

  const onLoadGetCountries = () =>
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((_countries) => setCountries(_countries.data));

  function searchFilter(countries) {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().indexOf(filterCountry.toLowerCase()) > -1
    );
  }

  useEffect(onLoadGetCountries, []);

  return (
    <>
      <div>
        {" "}
        Find Countries:{" "}
        <input
          onChange={handleSeachChange}
          value={filterCountry}
          autoComplete="off"
        ></input>
      </div>
      <CountryList countriesProp={searchFilter(countries)} />
    </>
  );
}

export default App;
