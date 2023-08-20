import axios from "axios";

const url = "http://localhost:8080/employees";

const getAll=()=>{
    return axios.get(url);
}
const remove=(id)=>{
    return axios.delete(url+`/${id}`);
}

export default {getAll,remove};