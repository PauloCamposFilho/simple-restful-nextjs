import axios from "axios";
import API from "../constants/API";

const instance = axios.create(
  {
    baseURL: API.RESTCountries.baseUrl
  });

export default instance;