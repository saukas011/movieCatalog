import { useState, useEffect} from "react";
import { MdMenu } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import NavLinks from "../NavLinks/NavLinks";
import popcorn from '../../assets/popcorn.png'
import "../../index.css";
import styles from './NavBar.module.css';

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); }

    return(
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <button  className={styles.menuBtn} onClick={toggleMenu}>
                    <MdMenu color="#d5d7d9" size="20px"/>
                </button>
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
                    <div className={styles.spike}></div>
                    <NavLinks />
                    <button className={styles.exitMenuBtn} onClick={() => setIsMenuOpen(false)}>
                        <HiXMark color="white" size="20px"/>
                    </button>
                </div>
            </div>
            
            <div className={styles.logoWrapper}>
                <img src={popcorn} alt="logo" className={styles.logoImg}/>
                <h1 className={styles.logoTitle}>Catálogo de Filmes</h1>
            </div>
            <div className={styles.navLinks}>
                <NavLinks />
            </div>
        </nav>
    )
}

export default NavBar