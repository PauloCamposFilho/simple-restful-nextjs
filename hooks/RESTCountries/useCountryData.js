import { useState } from "react";
import { fetchCountryData, reorderCountryData } from "../../helpers/fetchCountryData";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const useCountryData = (
  initialInputValue = '',
  initialResponseData = {},
  initialErrorDialogState = false,
  initialErrorMessage = ''
) => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(initialResponseData);
  const [errorDialogOpen, setErrorDialogOpen] = useState(initialErrorDialogState);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

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
      openErrorDialog(error.message);
    }
  };

  const openErrorDialog = (message) => {
    setErrorMessage(message);
    setErrorDialogOpen(true);
  };

  const closeErrorDialog = () => {
    setErrorMessage(initialErrorMessage);
    setErrorDialogOpen(initialErrorDialogState);
  };

  return {
    inputValue,
    responseData,
    handleInputChange,
    resetInputValue,
    handleResponseData,
    errorDialogOpen,
    errorMessage,
    openErrorDialog,
    closeErrorDialog
  };
};

export default useCountryData;