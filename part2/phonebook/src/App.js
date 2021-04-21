import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [displayedPersons, setDisplayedPersons] = useState(persons);

  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");
  const [newSearch, setNewSearch] = useState("");

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

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value);

    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    if (filteredPersons) {
      setDisplayedPersons(filteredPersons);
    }
    setPersons(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with:{" "}
      <input value={newSearch} onChange={handleNewSearch}></input>
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
        {displayedPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.tel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
