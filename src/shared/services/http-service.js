import axios from "axios";

export const httpGet = (url) => {
  return axios.get(url);
};

export const httpPost = (url, request, config) => {
  return axios.post(url, request, config);
};
