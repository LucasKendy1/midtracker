import styles from './Footer.module.css'
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer(){
    return(
        <footer className={styles.footer_container}>
            <p>
                <i>Site feito por <span className={styles.nome}>@Lucas_Kendy</span></i> 
            </p>
            <p>
                2023 &copy; MidTracker
            </p>
            <ul className={styles.lista}>
                <li className={styles.item_lista}><FaInstagram /></li>
                <li className={styles.item_lista}><FaLinkedin /></li>
                <li className={styles.item_lista}><FaGithub /></li>
            </ul>
        </footer>
    )
}

export default Footer