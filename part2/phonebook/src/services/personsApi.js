import axios from "axios";

const personsUrl = "./api/persons";

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
