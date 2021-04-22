import React, { useState } from "react";
import { Filter } from "./components/InputComponent";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";

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

    // Else add to the list
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewTel("");

    setDisplayedPersons(persons);
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
    // setPersons(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        inputText={"Search"}
        inputValueState={newSearch}
        onChangeHandler={handleNewSearch}
      />

      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newTel={newTel}
        handleNewTel={handleNewTel}
      />

      <Persons displayedPersons={displayedPersons} />
    </div>
  );
};

export default App;
