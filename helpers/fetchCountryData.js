import axios from '../utils/axios';

const fetchCountryData = async (countryName) => {
  console.log("We're in the fetchCountryData.js");
  try {
    const responseData = await axios.get(`${countryName}`);
    return responseData.data;
  } catch (error) {
    return { status: "error", message: error };
  }
};

export default fetchCountryData;