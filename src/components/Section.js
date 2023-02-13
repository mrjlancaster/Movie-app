import MovieCard from "./MovieCard";

const Section = ({ title, movies }) => {
  return (
    <section className="popular">
      <h3 className="popular__heading">{title}</h3>
      <div className="popular__movies">
        {movies.map((movie) => {
          return <MovieCard />;
        })}
      </div>
    </section>
  );
};

export default Section;
