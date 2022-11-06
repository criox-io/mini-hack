import axios from "axios";
import { env } from "../environment";

function get(url) {
  return axios.get(`${env.API_URL}${url}`);
}

function post(url, body) {
  return axios.post(`${env.API_URL}${url}`, body);
}

function update(url, body) {
  return axios.patch(`${env.API_URL}${url}`, body);
}

function deleteById(url) {
  return axios.delete(`${env.API_URL}${url}`);
}

export default { get, deleteById, post, update };
