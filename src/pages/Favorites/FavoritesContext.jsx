import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }){
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("movie-favorites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("movie-favorites", JSON.stringify(favorites));
    }, [favorites]);

    function addFavorite(movie) {
        const hasMovie = favorites.some(fav => fav.id === movie.id);
        if (!hasMovie) {
            setFavorites([...favorites, movie]);
        }
    }

    function removeFavorite(id) {
        const newFavorites = favorites.filter(movie => movie.id !== id);
        setFavorites(newFavorites);
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}
