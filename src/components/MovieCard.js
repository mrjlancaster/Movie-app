const MovieCard = ({ id, title, image }) => {
  return (
    <div class="latest__wrapper">
      {/* <img src=${imageBaseURL + item.poster_path} data-movie-id=${item.id} class="latest__poster" alt="" /> */}
      <p class="latest__title">${title}</p>
    </div>
  );
};

export default MovieCard;
