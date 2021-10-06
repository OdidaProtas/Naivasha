import axios from "axios";


const endpoint = "https://obscure-headland-67988.herokuapp.com";
const userToken = localStorage.getItem("userToken");

const headers = {
  Authorization: `Beaer ${userToken}`,
};

const axiosInstance = axios.create({
  baseURL: endpoint,
  timeout: 15000,
  headers: headers,
});

export default axiosInstance;
