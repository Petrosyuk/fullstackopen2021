import axios from "axios";

const personsUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(personsUrl);

const addPerson = (personObject) => {
  return axios.post(personsUrl, personObject);
};

const removePerson = (id) => {
  const payload = `${personsUrl}/${id}`;
  return axios.delete(payload);
};

export default { getAll, addPerson, removePerson };
