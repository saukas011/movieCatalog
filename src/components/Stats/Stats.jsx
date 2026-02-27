import { FaStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import "../../index.css";
import styles from "./Stats.module.css";

function Stats({ movie }){
    return(
        <div className={styles.statsWrapper}>
            <div className={styles.stats}>
                <div className={styles.rating}>
                    <FaStar className="icon" color="yellow"/>
                    <p className="rating-value">{movie?.vote_average?.toFixed(1)}</p>
                </div>
                <div className={styles.views}>
                    <IoPeople className="icon" color="rgba(108, 208, 255, 0.88)"/>
                    <p className="viewNumber">{movie?.popularity}</p>
                </div>

            </div>
        </div>
    )
}

export default Stats