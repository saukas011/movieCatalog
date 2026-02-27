import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api.js";
import MovieCard from "../components/MovieCard/MovieCard.jsx";
import "../index.css";


function Search(){
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const query = searchParams.get("q");

    useEffect(() => {
        async function fetchSearchResults() {
            setLoading(true);
            try {
                const response = await api.get("search/movie", {
                    params: { query: query }
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error("Erro na busca:", error);
            } finally {
                setLoading(false);
            }
        }

        if (query) fetchSearchResults();
    }, [query]);

    if (loading) return <div>Buscando resultados...</div>;

    return (
        <div className="search-container">
            <h2>Resultados para: {query}</h2>
            <div className="movies-container">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Search