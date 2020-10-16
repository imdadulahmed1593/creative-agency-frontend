import axios from "axios";

const instance = axios.create({
  baseURL: "https://afternoon-scrubland-98114.herokuapp.com", //the api (cloud function) url
});

export default instance;
// https://afternoon-scrubland-98114.herokuapp.com/
// http://localhost:8080
