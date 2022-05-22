import axios from "axios";

const { API_POINT } = process.env;

const api = async () => {
  return await axios.get(API_POINT).then((response) => response);
};

export default api;
