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
    const existingPerson = persons.filter((person) => person.name === newName);
    if (existingPerson.length) {
      //  Check if a person exists but with a different number
      if (existingPerson[0].number !== newTel) {
        const updateTelConfirm = window.confirm(
          `${existingPerson[0].name} already added to the phone book, replace the old number with the new one?`
        );
        // Update if diff number and user want to.
        if (updateTelConfirm) {
          let updateObject = existingPerson[0];
          updateObject.number = newTel;
          console.log(updateObject);
          personsApi.updatePerson(updateObject);
          setNewName("");
          setNewTel("");
        }
      } else {
        // if person name and tell phone number matches, reject new entry
        return alert(`${personObject.name} is already on the list!`);
      }
    }

    // Else add to the list if not exists
    if (!existingPerson.length) {
      personsApi
        .addPerson(personObject)
        .then((rsp) => setDisplayedPersons([...persons, rsp.data]));
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewTel("");
    }
  };

  const removePerson = (id) => {
    const personItem = persons.filter((person) => person.id === id)[0];
    const confirmRsp = window.confirm(
      `Delete ${personItem.name} from the reccord?`
    );

    if (confirmRsp) {
      personsApi.removePerson(id).then(() => {
        const newDisplayPersons = displayedPersons.filter(
          (person) => person.id !== id
        );
        setDisplayedPersons(newDisplayPersons);
      });
    }
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
