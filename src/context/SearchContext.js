import { useState, createContext } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  function setResults(data) {
    setSearchResults(data);
  }

  function setSearchModeOn() {
    setIsSearching(true);
  }

  const value = { searchResults, setResults, isSearching, setSearchModeOn };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
