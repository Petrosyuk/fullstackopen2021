import React from "react";

export const CountryList = (props) => {
  if (props.countriesProp.length > 10)
    return <p>Too many countries to display</p>;
  return (
    <div>
      {props.countriesProp.map((countryItem) => (
        <div key={countryItem.alpha3Code}>
          <h1>{countryItem.name}</h1>
          capital {countryItem.capital}
          <br />
          population {countryItem.population}
          <br />
          <h3>Languages</h3>
          <ul>
            {countryItem.languages.map((language) => (
              <li>{language.name}</li>
            ))}
          </ul>
          <img
            src={countryItem.flag}
            alt="country flag"
            width="200"
            height="250"
          />
        </div>
      ))}
    </div>
  );
};
