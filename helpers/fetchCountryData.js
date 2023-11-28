import { baseInstance, nameInstance } from "../utils/axios";

const fetchCountryData = async (countryName) => {
  try {
    if (!countryName) {
      return (await baseInstance.get()).data;
    }
    return (await nameInstance.get(`${countryName}`)).data;
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