import React, { useState, useEffect } from "react";
import { Filter } from "./components/InputComponent";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";
import personsApi from "./services/personsApi";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [displayedPersons, setDisplayedPersons] = useState(persons);

  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    personsApi.getAll().then((rsp) => {
      console.log(rsp);
      setPersons(rsp.data);
      setDisplayedPersons(rsp.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newTel,
    };
    // Check is person already on the list
    if (persons.filter((person) => person.name === newName).length) {
      return alert(`${personObject.name} is already on the list!`);
    }
    // Else add to the list
    personsApi
      .addPerson(personObject)
      .then((rsp) => setDisplayedPersons([...persons, rsp.data]));
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewTel("");
  };

  const removePerson = (id) => {
    personsApi.removePerson(id).then(() => {
      const newDisplayPersons = displayedPersons.filter(
        (person) => person.id !== id
      );
      setDisplayedPersons(newDisplayPersons);
    });
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

      <Persons
        displayedPersons={displayedPersons}
        deletePersonApiFunc={removePerson}
      />
    </div>
  );
};

export default App;
