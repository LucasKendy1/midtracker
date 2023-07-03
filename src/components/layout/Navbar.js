import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.navAberta}>
            <Link className={styles.link} to="/">HOME</Link>
            <Link className={styles.link} to="/livros">LIVROS</Link>
            <Link className={styles.link} to="/series">SERIES</Link>
            <Link className={styles.link} to="/animes">ANIMES</Link>
            <Link className={styles.link} to="/mangas">MANGAS</Link>
            <Link className={styles.link} to="/filmes">FILMES</Link>
        </nav>
    )
}

export default Navbar