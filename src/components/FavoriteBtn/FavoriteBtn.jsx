import { useContext } from "react";
import { FavoritesContext } from "../../pages/Favorites/FavoritesContext.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./FavoriteBtn.module.css"

function FavoriteBtn({ movie }){
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some(fav => fav.id === movie.id);

    const toggleFavorite = () => isFavorite ? removeFavorite(movie.id) : addFavorite(movie);


    return(
       <button className={styles.favoriteBtn} onClick={toggleFavorite}>{isFavorite ? <FaHeart color="#eb3939" /> : <FaRegHeart />}</button>
    )
}

export default FavoriteBtn