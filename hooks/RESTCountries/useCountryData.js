import { useState } from "react";

const useCountryData = (initialInputValue = '') => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setInputValue(initialInputValue);
  };

  const handleResponseData = (responseData) => {
    setResponseData(responseData);
  };
};