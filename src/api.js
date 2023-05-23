import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000",
  config:{
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  }
});

export default api;