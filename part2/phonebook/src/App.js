import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", tel: "718-718-718" },
  ]);
  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      tel: newTel,
    };

    // Check is person already on the list
    if (persons.filter((person) => person.name === newName).length) {
      return alert(`${personObject.name} is already on the list!`);
    }

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewTel("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewTel = (event) => {
    setNewTel(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} autoComplete="off">
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          tel: <input value={newTel} onChange={handleNewTel}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.tel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
