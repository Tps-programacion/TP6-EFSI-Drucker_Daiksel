import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './componentes/searchBar'
import MovieList from './componentes/movieList'

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(0);
  const [movieList, setMovieList] = useState([])

  return (
    <div>
      <SearchBar setMovieList={setMovieList} />
      <MovieList movieList={movieList}/>
    </div>
  );
}

export default App
