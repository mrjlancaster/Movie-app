const imageBaseURL = "https://image.tmdb.org/t/p/w342/";

const MovieCard = ({ id, title, image }) => {
  return (
    <div className="movie_card">
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
