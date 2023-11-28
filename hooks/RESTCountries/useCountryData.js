import { useState } from "react";
import { fetchCountryData, reorderCountryData } from "../../helpers/fetchCountryData";
import { useError } from "../../contexts/ErrorContext";

const useCountryData = (
  initialInputValue = '',
  initialResponseData = {},
  initialErrorDialogState = false,
  initialErrorMessage = ''
) => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(initialResponseData);
  // const [errorDialogOpen, setErrorDialogOpen] = useState(initialErrorDialogState);
  // const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
  const { showError } = useError();

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
      console.log("_responseData", _responseData); // Check if _responseData has the expected structure
      if (_responseData.status === "error") {
        throw new Error(`Error fetching country data: ${_responseData.message}`);
      }
      setResponseData(reorderCountryData(_responseData));
    } catch (error) {
      showError(error.message);
    }
  };

  // const openErrorDialog = (message) => {
  //   setErrorMessage(message);
  //   setErrorDialogOpen(true);
  // };

  // const closeErrorDialog = () => {
  //   setErrorMessage(initialErrorMessage);
  //   setErrorDialogOpen(initialErrorDialogState);
  // };

  return {
    inputValue,
    responseData,
    handleInputChange,
    resetInputValue,
    handleResponseData,
    // errorDialogOpen,
    // errorMessage,
    // openErrorDialog,
    // closeErrorDialog
  };
};

export default useCountryData;