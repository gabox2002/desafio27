import React from "react"
import { useParams } from "react-router-dom"
import moviesData from "../assets/data/movies.json"

function MovieDetail() {
    const { id } = useParams();
    const movie = moviesData.find((movie) => movie.id === parseInt(id));

    if (!movie)
        return <div className="movie-detail">Película no encontrada</div>;

    return (
        <div className="movie-detail">
            <h2>{movie.title}</h2>
            <div className="movie-container">
                <div className="img-container"> 
                    <img src={movie.image} alt={movie.title} />
                </div>
                <div className="description-container">
                    <p>Descripción: <span>{movie.description}</span></p>
                    <p>Género: <span>{movie.genre}</span></p>
                    <p>Duración: <span>{movie.duration}</span></p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
