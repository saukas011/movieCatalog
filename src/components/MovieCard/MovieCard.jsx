import { FaStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from './MovieCard.module.css'

function MovieCard({ movie }){
    return(
        <Link to={`/movie/${movie.id}`} className={styles.movieCard}>
                <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="poster" />
                <div className={styles.info}>
                    <p className={styles.movieTitle}>{movie.title}</p>
                    <div className={styles.stats}>
                        <div className={styles.rating}>
                            <FaStar color="yellow"/>
                            <p className="rating-value">{movie.vote_average.toFixed(1)}</p>
                        </div>
                        <div className={styles.views}>
                            <IoPeople />
                            <p className="viewNumber">{movie.popularity}</p>
                        </div>
                    </div>
                </div>
        </Link>
    );
}

export default MovieCard