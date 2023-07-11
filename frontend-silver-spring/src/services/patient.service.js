// import httpClient from '../http-common';
import axios from "axios";


const url = "http://localhost:3000/patients";
const url2 = "http://localhost:3000/patientdetails";

const getAll = () => {
  return axios.get(url);
};

const create = (data) => {
  return axios.post(url2, data);
};

const get = (id) => {
  return axios.get(url2+`/${id}`);
};

const update = (data) => {
  return axios.put(url, data);
};

const remove = (id) => {
  return axios.delete(url+`/${id}`);
};

export default { getAll, create, get, update, remove };
