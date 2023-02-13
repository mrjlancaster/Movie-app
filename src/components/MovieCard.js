const imageBaseURL = "https://image.tmdb.org/t/p/w342/";

const MovieCard = ({ id, title, image }) => {
  return (
    <div className="latest__wrapper">
      <img
        src={imageBaseURL + image}
        data-movie-id={id}
        className="latest__poster"
        alt=""
      />
      <p className="latest__title">{title}</p>
    </div>
  );
};

export default MovieCard;
