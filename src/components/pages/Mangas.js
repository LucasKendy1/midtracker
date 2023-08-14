import styles from './Home.module.css'
import Cards from '../layout/Cards'
import {useState, useEffect} from 'react'
 
function Mangas(){
   
    const [midias, setMidias] = useState([])
    const [midiaMessage, setMidiaMessage] = useState('')
    useEffect(() => {
        fetch('https://king-prawn-app-xjbhu.ondigitalocean.app/midias',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            // console.log(data)
            setMidias(data)
        })
        .catch((err) => console.log(err))
    },[])

    function removeMidia(id){
        fetch(`https://king-prawn-app-xjbhu.ondigitalocean.app/midias/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setMidias(midias.filter((midia) => midia.id !== id))
            setMidiaMessage('Midia removida com sucesso!')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.home_container}>
            <h1>Todas os Mangás</h1>
            
            {midias.map((midia) => 
                <div>
                    {midia.categoria=='Manga' &&(
                        <Cards
                        titulo={midia.titulo}
                        temporada={midia.temporada}
                        subcategoria={midia.subcategoria}
                        episodio={midia.episodio}
                        min={midia.min}
                        link={midia.link}
                        status={midia.status.name}
                        idstatus= {midia.status.id}
                        categoria={midia.categoria}
                        hora={midia.hora}
                        capitulo={midia.capitulo}
                        scan={midia.scan}
                        pagina={midia.pagina}
                        totpagina={midia.totpagina}
                        imagem={midia.imagem}
                        id={midia.id}
                        key={midia.id}
                        handleRemove={removeMidia}
                        />
                        )
                    }
                </div>
            )}
        </div>

    )
}

export default Mangas