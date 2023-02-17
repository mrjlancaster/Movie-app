import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { getMovieById } from "./api/moviesApi";
import { ModalContext } from "../context/ModalContext";

const imageBaseURL = "https://image.tmdb.org/t/p/w500";

const SearchResults = () => {
  const { searchResults } = useContext(SearchContext);
  const { openModal } = useContext(ModalContext);
  console.log(searchResults);

  const handlePosterClick = async (e) => {
    const movieId = e.target.id;
    const { data } = await getMovieById(movieId);
    console.log(data);

    // const dateOptions = {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // };

    // const d = new Date(data.release_date.replace(/-/g, "/"));
    // const releaseDate = new Intl.DateTimeFormat("en-US", dateOptions).format(d);

    // const voteAverageArr = String(data.vote_average).split(".");
    // const ratings = `${voteAverageArr[0]}.${voteAverageArr[1][0]}`;

    // const movieData = {
    //   poster: "https://image.tmdb.org/t/p/w500" + data.poster_path,
    //   title: data.title,
    //   genres: data.genres,
    //   releaseDate: releaseDate,
    //   duration: data.runtime,
    //   overview: data.overview,
    //   rating: ratings,
    //   homepage: data.homepage,
    // };

    // openModal(movieData);
  };

  return (
    <section className="search__results">
      <p className="search__results--heading">
        {searchResults.length} results found
      </p>
      <div className="output">
        {searchResults.map((item) => {
          console.log(item.id);
          return (
            <div
              id={item.id}
              onClick={handlePosterClick}
              className="template__wrapper"
            >
              <img
                id={item.id}
                src={imageBaseURL + item.poster_path}
                className="search__movie--poster"
                alt=""
              />
              <h4 className="search__movie--title">{item.title}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchResults;
