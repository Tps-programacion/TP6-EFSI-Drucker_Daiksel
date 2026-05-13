import axios from "axios";
import { useEffect, useState } from "react";
import style from "./searchBar.module.css";

function SearchBar({ setPeliculas }) {
  const [busqueda, setBusqueda] = useState("");

useEffect(() => {

 }, [busqueda])
  
  const buscarPeliculas = (e) => {
    e.preventDefault();
    const cancionBuscada = e.target.busqueda.value;
    setBusqueda(cancionBuscada);
    conseguirPeliculas();
  };

  async conseguirPeliculas() => {
      const respuesta = await axios.get(
   `http://www.omdbapi.com/?apikey=TU_KEY&s=${busqueda}`
)
  }

  return (
      <form onSubmit={buscarPeliculas}>
        <input
          type="text"
          placeholder="Busca peliculas..."
          name = "busqueda"
        />
        <button>Buscar</button>
      </form>
) };  