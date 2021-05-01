import React from "react";

export const Persons = ({ displayedPersons, deletePersonApiFunc }) => {
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
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.number}</td>
              <td>
                <button onClick={() => deletePersonApiFunc(person.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
