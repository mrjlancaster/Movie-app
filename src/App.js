import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Section from "./components/Section";
import { apiInstance } from "./components/api/axios";
import { getLatestMovies } from "./components/api/moviesApi";

function App() {
  const sections = ["upcoming", "latest", "popular", "top rated"];

  const getApiRequestExample = async () => {
    try {
      console.log(await getLatestMovies());

      // const { data } = await apiInstance.get("/movie/upcoming?");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiRequestExample();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Welcome />
        {/* 
        <Section title="Playing on theatre NOW!" movies={[]} />
        <Section title="Popular Movies" movies={[]} />
        <Section title="Top Rated" movies={[]} /> */}

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
