import Search from "./Search";

const Header = () => {
  return (
    <header>
      <span>
        <a href="/" className="logo">
          <span className="logo__movie">Movie</span>-
          <span className="logo__app">App</span>
        </a>
      </span>
      <Search />
    </header>
  );
};

export default Header;
