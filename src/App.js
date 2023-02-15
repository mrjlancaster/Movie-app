import { useState, useEffect, useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Section from "./components/Section";
import Modal from "./components/Modal";
import SearchResults from "./components/SearchResults";
import { getLatestMovies, getTopRatedMovies } from "./components/api/moviesApi";
import { ModalContext } from "./context/ModalContext";

function App() {
  const { isOpen: isModalOpen } = useContext(ModalContext);
  const [latestMovies, setLatestMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const getMovies = async () => {
    try {
      const latestMoviesRes = await getLatestMovies();
      const topRatedMoviesRes = await getTopRatedMovies();

      setLatestMovies(latestMoviesRes.data.results);
      setTopRatedMovies(topRatedMoviesRes.data.results);

      // const { data } = await apiInstance.get("/movie/upcoming?");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      {isModalOpen && <Modal />}
      <div className="container">
        <Header />
        <Welcome />

        <SearchResults />
        <Section title="Playing on theatre NOW!" movies={latestMovies} />
        <Section title="Top Rated Movies" movies={topRatedMovies} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
