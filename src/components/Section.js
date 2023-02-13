import MovieCard from "./MovieCard";

const Section = ({ title, movies }) => {
  return (
    <section className="popular">
      <h3 className="popular__heading">{title}</h3>
      <div className="popular__movies">
        {movies.map((movie) => {
          console.log(movie);
          return (
            <MovieCard
              id={movie.id}
              title={movie.title}
              image={movie.backdrop_path}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section;
