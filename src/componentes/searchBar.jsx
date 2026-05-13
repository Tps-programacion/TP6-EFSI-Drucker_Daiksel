import axios from "axios";
import { useState } from "react";
import style from "./searchBar.module.css";

return (
  <div className={style.searchBar}>
    <form onSubmit={buscarPeliculas}>
      <input
        type="text"
        placeholder="Busca peliculas"
        
      />
      <button>Buscar</button>
    </form>
    </div>
);