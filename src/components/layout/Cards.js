import styles from './Cards.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {useState} from 'react'

function Cards({ id, categoria, subcategoria, temporada, episodio,titulo, hora, min, link, status, capitulo, pagina, totpagina, scan, handleRemove}){

    const [category, setCategory] = useState(categoria)
    
    return(
        <div className={`${styles[categoria]}`}>
            {category=='Anime' &&(
                <div>
                    <h1>{titulo}</h1>
                    <p>Temporada: {temporada}</p>
                    <p>Episódio: {episodio}</p>
                    <p>Min: {min}</p>
                    <p>Link: {link}</p>
                    <p>Status: {status}</p>
                    <section>{categoria}</section>
                </div>
            )}
            {category=='Filme' &&(
                <div>
                    <h1>{titulo}</h1>
                    <p>Subcategoria: {subcategoria}</p>
                    <p>Episódio: {episodio}</p>
                    <p>Min: {min}</p>
                    <p>Link: {link}</p>
                    <section>{categoria}</section>
                </div>
            )}
            
        </div>
    )
}
export default Cards