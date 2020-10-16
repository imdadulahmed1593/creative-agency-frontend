import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080", //the api (cloud function) url
});

export default instance;
// https://afternoon-scrubland-98114.herokuapp.com/
// http://localhost:8080
