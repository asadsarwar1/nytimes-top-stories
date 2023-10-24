import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const baseRequest = (endpoint, method) => {
  const conf = {
    method: method,
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    url: endpoint,
  };
  return axios
    .request(conf)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
