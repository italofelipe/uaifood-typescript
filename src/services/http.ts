import axios, { AxiosInstance } from "axios";

const SECRET_KEY: string = "e3f67403be390f0a817f1a4476478b68";

const http: AxiosInstance = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/",
  headers: {
    "user-key": SECRET_KEY,
  },
});

export default http;
