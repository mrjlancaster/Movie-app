import { useState, createContext } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  function openModal(data) {
    setMovieDetails(data);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSettingMovieDetails(data) {
    setMovieDetails(data);
  }

  const value = {
    movieDetails,
    isOpen,
    openModal,
    closeModal,
    handleSettingMovieDetails,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
