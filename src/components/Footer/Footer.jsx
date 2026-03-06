import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Desenvolvido por Francisco Saukas. Veja outros projetos no meu <Link to="https://github.com/saukas011">github</Link>!</p>
        </footer>
    );
}

export default Footer