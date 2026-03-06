import { useContext } from "react";
import { FavoritesContext } from "../../pages/Favorites/FavoritesContext.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./FavoriteBtn.module.css"

function FavoriteBtn({ movie, className=''}){
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some(fav => fav.id === movie.id);

    const toggleFavorite = () => isFavorite ? removeFavorite(movie.id) : addFavorite(movie);


    return(
       <button className={`${styles.favoriteBtn} ${className}`} onClick={toggleFavorite}>{isFavorite ? <FaHeart color="#eb3939" cursor="pointer" size="15px"/> : <FaRegHeart cursor="pointer" color="#ffffff7a"/>}</button>
    )
}

export default FavoriteBtn