import { MdSearch } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api.js"
import styles from './SearchTool.module.css';

function SearchTool(){

    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const hasSuggestions = suggestions.length > 0;
    const searchRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query) return;

        navigate(`/search?q=${query}`);
        setSuggestions([]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) setSuggestions([]);
        };
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {document.removeEventListener("mousedown", handleClickOutside);};
    }, []);

    useEffect(() => {

        const handler = setTimeout(async () => {
            try {
                const response = await api.get('search/movie', {
                    params: { query: query }
                });
                setSuggestions(response.data.results.slice(0, 5));
            } catch (error) {
                console.error("Erro na busca", error);
            }
        }, 500);
        return () => clearTimeout(handler);
    }, [query]);

    return(
        <div className={styles.searchToolWrapper} ref={searchRef}>
            <MdSearch className={styles.searchIcon} size="20px"/>
            <form onSubmit={handleSearch} >
                <input type="text" placeholder="pesquisar" id="searchTool" autoComplete="off" className={`${styles.searchInput}  ${hasSuggestions ? styles.activeInput : ''}`} value={query} onChange={(e) => setQuery(e.target.value)}/>
            </form>

            {hasSuggestions && (
                <div className={styles.suggestions}>
                    {suggestions.map((movie) => (
                        <div key={movie.id} className={styles.suggestionItem} onClick={() => {navigate(`/movie/${movie.id}`); setQuery(""); setSuggestions([]);}}>
                            <MdSearch /> <span>{movie.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchTool