import { useContext, createContext, useState } from "react";

const DialogContext = createContext();
export const DialogProvider = ({ children }) => {
  const [label, setLabel] = useState(null);
  const [message, setMessage] = useState(null);

  const showDialog = (label, message) => {
    setLabel(label);
    setMessage(message);
  };

  const hideDialog = () => {
    setLabel(null);
    setMessage(null);
  };

  return (
    <DialogContext.Provider value={{ label, message, showDialog, hideDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};