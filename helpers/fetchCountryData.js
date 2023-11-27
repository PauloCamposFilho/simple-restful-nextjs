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

const reorderCountryData = (countryData) => {
  console.log(countryData);
  if (countryData.length <= 1) {
    return countryData;
  }
  return countryData.sort((a,b) => b.population - a.population);
};

export { fetchCountryData, reorderCountryData }