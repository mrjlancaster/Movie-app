import { useState, useContext } from "react";
import { GoSearch } from "react-icons/go";
import { search } from "./api/moviesApi";
import { SearchContext } from "../context/SearchContext";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setResults, setSearchModeOn } = useContext(SearchContext);

  const handleSearch = async () => {
    setSearchModeOn();

    try {
      const res = await search(searchInput);
      console.log(res);

      setResults(res.data.results);
      setSearchInput("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="search__input--container">
      <div className="search__bar">
        <input
          type="text"
          className="search__input"
          value={searchInput}
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch} type="button" className="search">
          <GoSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
