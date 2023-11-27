import { useState } from "react";
import { fetchCountryData, reorderCountryData } from "../../helpers/fetchCountryData";

const useCountryData = (initialInputValue = '', initialResponseData = {}) => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(initialResponseData);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setInputValue(initialInputValue);
    setResponseData(initialResponseData);
  };

  const handleResponseData = async (countryName) => {
    const _responseData = await fetchCountryData(countryName);
    setResponseData(reorderCountryData(_responseData));
  };

  return {
    inputValue,
    responseData,
    handleInputChange,
    resetInputValue,
    handleResponseData,
  };
};

export default useCountryData;