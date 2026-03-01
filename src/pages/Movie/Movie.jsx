import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api";
import Stats from "../../components/Stats/Stats.jsx";
import FavoriteBtn from "../../components/FavoriteBtn/FavoriteBtn.jsx"
import styles from "./Movie.module.css";

function Movie(){
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            try {
                const response = await api.get(`movie/${id}`);
                
                setMovie(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar detalhes do filme:", error);
                setLoading(false);
            }
        }
        loadMovie();

    }, [id]);
    
    if (loading) return <div>Carregando...</div>;

    const bannerStyle = {
        backgroundImage: `linear-gradient(to top, #0c0f14d0 20%, transparent), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`
    }

    return (
        <>
            <div className={styles.movieInfo}>
                <div style={bannerStyle} className={styles.banner} />
                <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="poster" className={styles.poster}/>
                <h3 className={styles.movieTitle}>{movie?.title}</h3>
                <p className={styles.description}>{movie?.overview}</p>
                <div className={styles.statsWrapper}>
                    <Stats movie={movie}/>
                </div>
            <FavoriteBtn movie={movie} className={styles.FavoriteBtn}/> 
            </div>
        </>
    );
}

export default Movie