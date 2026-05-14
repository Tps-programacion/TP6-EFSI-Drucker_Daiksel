import axios from "axios";
import { useEffect, useState } from "react";

function SearchBar({ setMovieList }) {
  const [busqueda, setBusqueda] = useState("");

  const buscarPeliculas = async (e) => {
    e.preventDefault();
    const peliculaBuscada = e.target.busqueda.value;
    setBusqueda(peliculaBuscada);
    const respuesta = await axios.get(`http://www.omdbapi.com/?apikey=65b4b58d&s=${peliculaBuscada}`);
    setMovieList(respuesta.data.Search);
  };

  return (
    <form onSubmit={buscarPeliculas}>
      <input
        type="text"
        placeholder="Busca peliculas..."
        name="busqueda"
      />
      <button>Buscar</button>
    </form>
  );
}
export default SearchBar;