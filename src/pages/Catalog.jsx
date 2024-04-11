import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moviesData from '../assets/data/movies.json'

function Catalog() {
    // eslint-disable-next-line
    const [movies, setMovies] = useState(moviesData);
    return (
      <div className="catalog">
        <h2>Catálogo de Películas</h2>
        <div className="movie-list">
          {movies.map(movie => (
            <div className="movie-card" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Catalog;