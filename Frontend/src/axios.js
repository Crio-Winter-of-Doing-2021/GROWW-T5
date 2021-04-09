import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  // baseURL: "http://13.233.94.172:4000/",
});

export default instance;
