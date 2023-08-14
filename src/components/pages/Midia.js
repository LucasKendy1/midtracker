import styles from './Midia.module.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Cards from '../layout/Cards'
import SerieForm from '../form/SerieForm'
import MangaForm from '../form/MangaForm'
import FilmesForm from '../form/FilmesForm'
import LivroForm from '../form/LivroForm'
import AnimeForm from '../form/AnimeForm'
import Mensagem from '../layout/Mensagem'
import {useNavigate} from 'react-router-dom'

function Midia(){
    const {id} = useParams()
    const [midia, setMidia] = useState([])
    const [showMidiaForm, setShowMidiaForm] = useState(false)
    const [midias,setMidias] = useState([])
    const [message, setMidiaMessage]= useState()
    const navigate = useNavigate()

    console.log(midia)

    useEffect(() => {
        fetch(`https://midtracker-d6b51-default-rtdb.firebaseio.com/midias/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then(resp => resp.json())
        .then((data) =>{
            setMidia(data)
        })
        .catch(err => console.log(err))
    }, [id])

    function toggleMidiaForm(){
        setShowMidiaForm(!showMidiaForm)
    }

    function editPost(midia){
        fetch(`https://midtracker-d6b51-default-rtdb.firebaseio.com/midias/${midia.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(midia),
        }).then(resp => resp.json())
        .then((data) =>{
            setMidias(data)
            navigate('/', { state: { message: 'Midia editada com sucesso!'}})
        })
        .catch(err => console.log(err))
    }

    function removeMidia(id){
        fetch(`https://midtracker-d6b51-default-rtdb.firebaseio.com/midias/${midia.id}`,{
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
        <div className={styles.body}>
            <h1>{midia.titulo}</h1>
            <button onClick={toggleMidiaForm}>{!showMidiaForm ? "Editar" : "Fechar"}
            </button>
            
            {!showMidiaForm ? (
                <div>
                    <Cards 
                        titulo={midia.titulo} 
                        temporada={midia.temporada}
                        subcategoria={midia.subcategoria}
                        episodio={midia.episodio}
                        min={midia.min}
                        link={midia.link}
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
                </div> //Editar
            ) : (
                <div>
                    {midia.categoria=="Serie"&&(
                        <SerieForm handleSubmit={editPost} btnText={"Editar"} midiaData={midia}/>
                    )}
                    {midia.categoria=="Manga"&&(
                        <MangaForm handleSubmit={editPost} btnText={"Editar"} midiaData={midia}/>
                    )}
                    {midia.categoria=="Anime"&&(
                        <AnimeForm handleSubmit={editPost} btnText={"Editar"} midiaData={midia}/>
                    )}
                    {midia.categoria=="Livro"&&(
                        <LivroForm handleSubmit={editPost} btnText={"Editar"} midiaData={midia}/>
                    )}
                    {midia.categoria=="Filme"&&(
                        <FilmesForm handleSubmit={editPost} btnText={"Editar"} midiaData={midia}/>
                    )}
                </div> //Fechar
            )}
        </div>
    )
}

export default Midia