import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>MidTracker</span></h1>
            <p>Cadastre seus animes, series, filmes e muito mais!</p>
            <LinkButton to={"/new"} text="Add Midia + "/>
        </section>
    )
}

export default Home