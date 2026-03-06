import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import '../../index.css'

function Favorites(){
    const { favorites } = useContext(FavoritesContext);

    return (
        
        <div style={{ display: "flex"}}>
            <div className="favorites-container">
                <h1>favoritos</h1>
                <div className="movies-container">
                        {favorites.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>
        </div>
    );

}

export default Favorites