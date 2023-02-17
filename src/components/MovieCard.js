import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { getMovieById } from "./api/moviesApi";
const imageBaseURL = "https://image.tmdb.org/t/p/w342/";

const MovieCard = ({ id, title, image }) => {
  const { openModal } = useContext(ModalContext);

  const handlePosterClick = async () => {
    const { data } = await getMovieById(id);

    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const d = new Date(data.release_date.replace(/-/g, "/"));
    const releaseDate = new Intl.DateTimeFormat("en-US", dateOptions).format(d);

    const voteAverageArr = String(data.vote_average).split(".");
    const ratings = `${voteAverageArr[0]}.${voteAverageArr[1][0]}`;

    const movieData = {
      poster: "https://image.tmdb.org/t/p/w500" + data.poster_path,
      title: data.title,
      genres: data.genres,
      releaseDate: releaseDate,
      duration: data.runtime,
      overview: data.overview,
      rating: ratings,
      homepage: data.homepage,
    };

    openModal(movieData);
  };

  return (
    <div onClick={handlePosterClick} id={id} className="movie_card">
      <img
        src={imageBaseURL + image}
        data-movie-id={id}
        className="movie_card-poster"
        alt="movie poster"
      />
      <p className="movie_card-title">{title}</p>
    </div>
  );
};

export default MovieCard;
