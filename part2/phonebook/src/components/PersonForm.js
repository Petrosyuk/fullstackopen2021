import React from "react";

export const PersonForm = ({
  addPerson,
  newName,
  handleNewName,
  newTel,
  handleNewTel,
}) => (
  <>
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
  </>
);
