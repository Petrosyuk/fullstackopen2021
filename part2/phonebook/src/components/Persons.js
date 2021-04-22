import React from "react";

export const Persons = ({ displayedPersons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <th>Number:</th>
          </tr>
          {displayedPersons.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
