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
                <li className={styles.item_lista}>
                    <a className={styles.a} href="https://www.instagram.com/lucaskendy2/" target='blank'>
                        <FaInstagram />
                    </a>
                </li>
                <li className={styles.item_lista}>
                    <a className={styles.a} href="https://www.linkedin.com/in/lucas-kendy-28931a196/" target='blank'>
                        <FaLinkedin />
                    </a>
                </li>
                <li className={styles.item_lista}>
                    <a className={styles.a} href="https://github.com/LucasKendy1" target='blank'>
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer