import { FaStar } from "react-icons/fa";
import { IoMdThumbsUp } from "react-icons/io";;
import "../../index.css";
import styles from "./Stats.module.css";

function Stats({ movie }){
    return(
            <div className={styles.stats}>
                <div className={styles.rating}>
                    <FaStar className="icon" color="#D29922"/>
                    <p className={styles.ratingValue}>{movie?.vote_average?.toFixed(1)}</p>
                </div>
                <div className={styles.votes}>
                    <IoMdThumbsUp className="icon" color="#ffffff"/>
                    <p className="viewNumber">{movie?.vote_count}</p>
                </div>

            </div>
    )
}

export default Stats