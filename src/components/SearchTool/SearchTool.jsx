import styles from './SearchTool.module.css';
import { MdSearch } from "react-icons/md";

function SearchTool(){
    return(
        <div className={styles.searchWrapper}>
            <MdSearch className={styles.searchIcon}/>
            <input type="text" placeholder="pesquisar" id="searchTool" className={styles.searchInput}/>
        </div>
    );
}

export default SearchTool