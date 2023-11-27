import axios from '../utils/axios';

const fetchCountryData = async (countryName) => {
  try {
    const responseData = await axios.get(`/alpha/${countryName}`);
    return responseData.data;
  } catch (error) {
    return { status: "error", message: error };
  }
};

export default fetchCountryData;