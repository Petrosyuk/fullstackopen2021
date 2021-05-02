import axios from "axios";

const personsUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(personsUrl);

const addPerson = (personObject) => {
  return axios.post(personsUrl, personObject);
};

const removePerson = (id) => {
  return axios.delete(`${personsUrl}/${id}`);
};

const updatePerson = (personObject) => {
  axios.patch(`${personsUrl}/${personObject.id}`, personObject);
};

export default { getAll, addPerson, removePerson, updatePerson };
