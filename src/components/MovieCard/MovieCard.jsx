import { Link } from "react-router-dom";
import Stats from "../Stats/Stats.jsx";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn.jsx"
import styles from "./MovieCard.module.css";

function MovieCard({ movie }){
    return(
        <div className={styles.movieCard}>
            <Link to={`/movie/${movie.id}`} className={styles.movieLink}>
                    <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt={movie.title} className={styles.poster}/>
                    <div className={styles.info}>
                        <p className={styles.movieTitle}>{movie.title}</p>
                        <Stats movie={movie} />
                    </div>
            </Link>
            <FavoriteBtn movie={movie}/>
        </div>
    );
}

export default MovieCard