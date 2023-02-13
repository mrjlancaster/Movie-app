import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Section from "./components/Section";
import Modal from "./components/Modal";
import { getLatestMovies, getTopRatedMovies } from "./components/api/moviesApi";

function App() {
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
      <div className="container">
        <Header />
        <Welcome />

        <Section title="Playing on theatre NOW!" movies={latestMovies} />
        {/* <Section title="Popular Movies" movies={[]} /> */}
        <Section title="Top Rated Movies" movies={topRatedMovies} />

        {/* <section className="upcoming">
          <div className="upcoming__movies"></div>
        </section>

        <section className="latest">
          <div className="latest__movies"></div>
        </section>

        <section className="popular">
          <div className="popular__movies"></div>
        </section>

        <section className="top__rated">
          <div className="top__rated--movies"></div>
        </section> */}

        <section className="search__results">
          <p className="search__results--heading"></p>
          <div className="output"></div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
