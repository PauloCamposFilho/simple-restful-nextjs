import { useState } from "react";
import fetchCountryData from "../../helpers/fetchCountryData";

const useCountryData = (initialInputValue = '') => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setInputValue(initialInputValue);
  };

  const handleResponseData = async (countryName) => {
    const _responseData = await fetchCountryData(countryName);
    console.log(_responseData);
    setResponseData(_responseData);
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