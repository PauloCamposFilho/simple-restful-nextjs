import { useState } from "react";
import { fetchCountryData, reorderCountryData } from "../../helpers/fetchCountryData";
import { useDialog } from "../../contexts/DialogContext";

const useCountryData = (initialInputValue = '', initialResponseData = {}) => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(initialResponseData);
  const { showDialog } = useDialog();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setInputValue(initialInputValue);
    setResponseData(initialResponseData);
  };

  const handleResponseData = async (countryName) => {
    try {
      const _responseData = await fetchCountryData(countryName);
      if (_responseData.status === "error") {
        throw new Error(`Error fetching country data: ${_responseData.message}`);
      }
      setResponseData(reorderCountryData(_responseData));
    } catch (error) {
      showDialog("Error", error.message);
    }
  };

  return {
    inputValue,
    responseData,
    handleInputChange,
    resetInputValue,
    handleResponseData
  };
};

export default useCountryData;