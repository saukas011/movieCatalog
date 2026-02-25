import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import popcorn from '../../assets/popcorn.png'
import styles from './NavBar.module.css';

function NavBar(){
    return(
        <nav className={styles.navbarContainer}>
            <div className={styles.logoWrapper}>
                <img src={popcorn} alt="logo" className={styles.logoImg}/>
                <h2 className={styles.logo}>Catálogo de Filmes</h2>
            </div>
            <ul className={styles.navLinks}>
                <li className={styles.navItems}> <Link to="/" className={styles.homeLink}><FaHome color="white" />Home</Link></li>
                <li className={styles.navItems}> <Link to="/favorites" className={styles.favoritesLink}><MdFavorite color="#eb3939"/>Favoritos</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar