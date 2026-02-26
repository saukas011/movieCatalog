import { FaStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import styles from "./Stats.module.css";

function Stats({ movie }){
    return(
        <div className={styles.statsWrapper}>
            <div className={styles.stats}>
                <div className={styles.rating}>
                    <FaStar color="yellow"/>
                    <p className="rating-value">{movie?.vote_average?.toFixed(1)}</p>
                </div>
                <div className={styles.views}>
                    <IoPeople />
                    <p className="viewNumber">{movie?.popularity}</p>
                </div>
            </div>
        </div>
    )
}

export default Stats