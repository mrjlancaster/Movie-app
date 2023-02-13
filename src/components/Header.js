import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { apiInstance } from "./api/axios";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async () => {
    try {
      const splitSearch = searchInput.split(" ");
      let searchValue;

      if (splitSearch.length > 1) {
        for (let item of splitSearch) {
          searchValue[0] += item;
        }
      }

      console.log(searchValue);

      const res = await apiInstance.get(`/search/movie?&query=${searchInput}`);
      //   console.log(res);
      setSearchInput("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <span>
        <a href="/" className="logo">
          <span className="logo__movie">Movie</span>-
          <span className="logo__app">App</span>
        </a>
      </span>
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
            {/* <i className="fas fa-search"></i> */}
            <GoSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
