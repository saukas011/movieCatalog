import { useState, useEffect } from "react";
import api from "../api";
import MovieCard from "../components/MovieCard/MovieCard";
import NavBar from "../components/NavBar/NavBar.jsx";
import '../index.css'

function Home(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function loadMovies(){
            const response = await api.get('movie/popular');
            setMovies(response.data.results);
            console.log(response.data.results);
        }
        loadMovies();
    }, [])
    return (
        <>
            <div className="movies-container">
                {movies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>
        </>
    );
}

export default Home