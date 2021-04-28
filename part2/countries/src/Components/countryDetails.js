import React from "react";

export const CountryDetail = ({ country }) => {
  return (
    <div id={country.alpha3Code + "-dtl"} style={{ display: "none" }}>
      capital {country.capital}
      <br />
      population {country.population}
      <br />
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="country flag" width="200" height="250" />
    </div>
  );
};
