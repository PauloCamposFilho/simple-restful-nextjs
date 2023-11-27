import axios from '../utils/axios';

const fetchCountryData = async (countryName) => {
  console.log("We're in the fetchCountryData.js");
  try {
    console.log("Trying to get info...");
    const responseData = await axios.get(`${countryName}`);
    alert(responseData.data[0].name.common);
    console.log("Got it!");
    return responseData.data;
  } catch (error) {
    console.log("Something is up:")
    console.log(error);
    return { status: "error", message: error };
  }
};

export default fetchCountryData;