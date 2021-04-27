import React, { useState, useEffect } from "react";
import axios from "axios";
import { CountryList } from "./Components/countries";

// const [searchState, setSearchState] = useState("");

function App() {
  const [displayedPersons, setDisplayedPersons] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSeachChange = (event) => setDisplayedPersons(event.target.value);

  const onLoadGetCountries = () =>
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((_countries) => setCountries(_countries.data));

  function searchFilter(rows) {
    return rows.filter(
      (country) =>
        country.name.toLowerCase().indexOf(displayedPersons.toLowerCase()) > -1
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
          value={displayedPersons}
          autoComplete="off"
        ></input>
      </div>
      <CountryList countriesProp={searchFilter(countries)} />
    </>
  );
}

export default App;
