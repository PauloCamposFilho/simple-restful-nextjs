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

  const getResponseData = (countryName) => {
    fetchCountryData(countryName);
    handleResponseData(responseData);
  };

  const handleResponseData = (responseData) => {
    setResponseData(responseData);
  };

  return {
    inputValue,
    responseData,
    handleInputChange,
    resetInputValue,
    getResponseData,
    handleResponseData
  };
};

export default useCountryData;