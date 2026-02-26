import { FaStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";
import Stats from "../Stats/Stats.jsx";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }){
    return(
        <Link to={`/movie/${movie.id}`} className={styles.movieCard}>
                <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="poster" className={styles.poster}/>
                <div className={styles.info}>
                    <p className={styles.movieTitle}>{movie.title}</p>
                    <Stats movie={movie} />
                </div>
        </Link>
    );
}

export default MovieCard