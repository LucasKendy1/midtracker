import styles from './Cards.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {useState} from 'react'
import LinkButton from './LinkButton'
import { Link } from 'react-router-dom'

function Cards({ id, categoria, subcategoria, temporada, episodio,titulo, hora, min, link, status, capitulo, pagina, totpagina, scan, imagem, handleRemove}){

    const [category, setCategory] = useState(categoria)
    
    return(
        <div className={`${styles[categoria]}`}>
            {category=='Anime' &&(
                <div>
                    <h1>{titulo}</h1>
                    <p>Temporada: {temporada}</p>
                    <p>Episódio: {episodio}</p>
                    <p>Min: {min}</p>
                    <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    <p>Status: {status}</p>
                    <section>{categoria}</section>
                </div>
            )}
            {category=='Filme' &&(
                <div>
                    <div><img src={imagem} alt="" /></div>
                    <h1>{titulo}</h1>
                    <p>Subcategoria: {subcategoria}</p>
                    <p>Hora: {hora}</p>
                    <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    <p>Status: {status}</p>
                    <section>{categoria}</section>
                </div>
            )}
            {category=='Manga' &&(
                <div>
                    <h1>{titulo}</h1>
                    <p>Capitulo: {capitulo}</p>
                    <p>Scan: {scan}</p>
                    <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    <p>Status: {status}</p>
                    <section>{categoria}</section>
                </div>
            )}
            {category=='Serie' &&(
                <div>
                    <h1>{titulo}</h1>
                    <p>Temporada: {temporada}</p>
                    <p>Episódio: {episodio}</p>
                    <p>Hora: {hora}</p>
                    <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    <p>Status: {status}</p>
                    <section>{categoria}</section>
                </div>
            )}
            {category=='Livro' &&(
                <div>
                    <h1>{titulo}</h1>
                    <p>Capitulo: {capitulo}</p>
                    <p>Página: {pagina}</p>
                    <p>Total de páginas: {totpagina}</p>
                    <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    <p>Status: {status}</p>
                    <section>{categoria}</section>
                </div>
            )}
        </div>
    )
}
export default Cards