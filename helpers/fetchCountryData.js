import axios from '../utils/axios';

const fetchCountryData = async (countryName) => {
  try {
    const responseData = await axios.get(`${countryName}`);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    return { status: "error", message: error };
  }
};

const reorderCountryData = (countryData) => {
  if (countryData.length <= 1) {
    return countryData;
  }
  return countryData.sort((a,b) => b.population - a.population);
};

export { fetchCountryData, reorderCountryData }