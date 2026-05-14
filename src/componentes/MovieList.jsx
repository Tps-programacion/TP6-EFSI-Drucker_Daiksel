

function MovieList({ movieList }) {
  return (
    <div>
      {movieList.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;