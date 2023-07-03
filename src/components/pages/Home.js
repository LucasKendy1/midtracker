import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import Mensagem from '../layout/Mensagem'
import {useLocation} from 'react-router-dom'
import Cards from '../layout/Cards'
import {useState, useEffect} from 'react'

function Home(){
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    const [midias, setMidias] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/midias',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setMidias(data)
        })
        .catch((err) => console.log(err))
    },[])

    return (

        <section className={styles.home_container}>
            {message && <Mensagem msg={message} type="success"/>}
            <h1>Bem vindo ao <span>MidTracker</span></h1>
            <p>Cadastre seus animes, series, filmes e muito mais!</p>

            <LinkButton to={"/new"} text="Add Midia + "/>

            <br />
            <div className={styles.render_container}>
                {midias.length > 0 &&(
                    midias.map((midia) =>
                    <Cards 
                        titulo={midia.titulo} 
                        temporada={midia.temporada}
                        subcategoria={midia.subcategoria}
                        episodio={midia.episodio}
                        min={midia.min}
                        link={midia.link}
                        status={midia.status.name}
                        categoria={midia.categoria}
                        hora={midia.hora}
                        capitulo={midia.capitulo}
                        scan={midia.scan}
                        pagina={midia.pagina}
                        totpagina={midia.totpagina}
                        imagem={midia.imagem}
                        key={midia.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default Home