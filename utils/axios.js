import axios from "axios";
import API from "../constants/API";

const nameInstance = axios.create(
  {
    baseURL: API.RESTCountries.baseUrl
  }
);

const baseInstance = axios.create(
  {
    baseURL: API.RESTCountries.allUrl
  }
);

// export default baseInstance;
export { nameInstance, baseInstance };