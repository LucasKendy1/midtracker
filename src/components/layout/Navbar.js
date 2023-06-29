import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.navAberta}>
            <Link to="/">HOME</Link>
            <Link to="/livros">LIVROS</Link>
            <Link to="/series">SERIES</Link>
            <Link to="/animes">ANIMES</Link>
            <Link to="/mangas">MANGAS</Link>
            <Link to="/filmes">FILMES</Link>
        </nav>
    )
}

export default Navbar