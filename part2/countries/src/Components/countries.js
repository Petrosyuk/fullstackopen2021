import React from "react";
import { CountryDetail } from "./countryDetails";

export const CountryList = ({ countriesProp }) => {
  function handleShowButton(e) {
    let trg = document.getElementById(e.target.id + "-dtl");
    if (trg.style.display === "none") {
      trg.style.display = "";
    } else {
      trg.style.display = "none";
    }
  }

  if (countriesProp.length === 0) {
    return <p>No country found.</p>;
  }

  if (countriesProp.length > 10) {
    return <p>Too many countries to display</p>;
  }

  return (
    <div>
      {countriesProp.map((countryItem) => (
        <div key={countryItem.name}>
          <h1>
            {countryItem.name}{" "}
            <button id={countryItem.alpha3Code} onClick={handleShowButton}>
              {" "}
              show{" "}
            </button>{" "}
          </h1>{" "}
          <CountryDetail country={countryItem} />
        </div>
      ))}
    </div>
  );
};
