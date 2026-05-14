
function MovieCard({movie}) {
     return(
        <div key={movie.imdbID}>
        <img src={movie.Poster} alt={`${movie.Title} imagen`} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        </div> 
     )
}