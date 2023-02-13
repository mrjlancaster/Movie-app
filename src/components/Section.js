import MovieCard from "./MovieCard";

const Section = ({ title, movies }) => {
  return (
    <section className="section">
      <h3 className="section_heading">{title}</h3>
      <div className="section_movies-container">
        {movies.map((movie) => {
          console.log(movie);
          return (
            <MovieCard
              id={movie.id}
              title={movie.title}
              image={movie.poster_path}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section;
