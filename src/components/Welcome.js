import { useState, useEffect } from "react";
import { apiInstance } from "./api/axios";
import { AiOutlineArrowRight } from "react-icons/ai";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Welcome = () => {
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");

  const getWelcomingMovie = async () => {
    try {
      const { data } = await apiInstance.get("/movie/upcoming?");
      const movie = data.results[11];
      console.log("movie", data.results);
      setTitle(movie.title);
      setOverview(movie.overview);
      setPoster(baseURL + movie.backdrop_path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWelcomingMovie();
  }, []);

  return (
    <section style={{ backgroundImage: `url(${poster}` }} className="welcome">
      <div className="welcome__content">
        <h1 className="welcome__title">{title}</h1>
        <div className="welcome__description--container">
          <p className="welcome__description">{overview}</p>
          <a href="#" target="_blank" className="welcome__button">
            View more <AiOutlineArrowRight className="action_btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
