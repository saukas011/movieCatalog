import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import styles from "./NavLinks.module.css";

function NavLinks(){
    return(
        <ul className={styles.navLinks}>
            <li className={styles.navItems}>
                <Link to="/" className={styles.homeLink} onClick={() => setIsMenuOpen(false)}>
                <FaHome className="icon" color="white" />Home</Link>
            </li>
            <li className={styles.navItems}>
                <Link to="/favorites" className={styles.favoritesLink} onClick={() => setIsMenuOpen(false)}>
                <MdFavorite className="icon" color="#eb3939"/>Favoritos</Link>
            </li>
        </ul>
    )
}

export default NavLinks