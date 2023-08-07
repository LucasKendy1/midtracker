import styles from './Cards.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Cards({ id, categoria, subcategoria, temporada, episodio,titulo, hora, min, link, status, capitulo, pagina, totpagina, scan, imagem, handleRemove, idstatus}){

    const [category, setCategory] = useState(categoria)
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={`${styles[categoria]}`}>
            {category=='Anime' &&(
                <div className={styles.mainDiv}>
                    <div className={styles.imageDiv}>
                        <img src={imagem} alt="imagem não suportada"/>
                    </div>

                    <div className={styles.categoryName}>{categoria}</div>

                    <div className={styles.titleDiv}>
                        <h1>{titulo}</h1>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Temporada: {temporada}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Episódio: {episodio}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Min: {min}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    </div>
                    
                    <div className={styles.statusDiv}>
                        <p><span className={`${styles[`status${idstatus}`]}`}></span>{status}</p>
                    </div>
                    
                    <div className={styles.actionsAnime}>
                        <Link to={`/midia/${id}`}>
                            <BsPencil /> Editar
                        </Link>
                        <button onClick={remove}>
                            <BsFillTrashFill /> Excluir
                        </button>
                    </div>
                </div>
            )}
            {category=='Filme' &&(
                <div className={styles.mainDiv}>
                    <div className={styles.imageDiv}>
                        <img src={imagem} alt="imagem não suportada"/>
                    </div>

                    <div className={styles.categoryName}>{categoria}</div>

                    <div className={styles.titleDiv}>
                        <h1>{titulo}</h1>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Subcategoria: {subcategoria}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Hora: {hora}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    </div>

                    <div className={styles.statusDiv}>
                        <p><span className={`${styles[`status${idstatus}`]}`}></span>{status}</p>
                    </div>

                    <div className={styles.actionsSerie}>
                        <Link to={`/midia/${id}`}>
                            <BsPencil /> Editar
                        </Link>
                        <button onClick={remove}>
                            <BsFillTrashFill /> Excluir
                        </button>
                    </div>
                </div>
            )}
            {category=='Manga' &&(
                <div className={styles.mainDiv}>
                    <div className={styles.imageDiv}>
                        <img src={imagem} alt="imagem não suportada"/>
                    </div>

                    <div className={styles.categoryName}>{categoria}</div>

                    <div className={styles.titleDiv}>
                        <h1>{titulo}</h1>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Capitulo: {capitulo}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Scan: {scan}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    </div>

                    <div className={styles.statusDiv}>
                        <p><span className={`${styles[`status${idstatus}`]}`}></span>{status}</p>
                    </div>
                    
                    <div className={styles.actionsManga}>
                        <Link to={`/midia/${id}`}>
                            <BsPencil /> Editar
                        </Link>
                        <button onClick={remove}>
                            <BsFillTrashFill /> Excluir
                        </button>
                    </div>
                </div>
            )}
            {category=='Serie' &&(
                <div className={styles.mainDiv}>
                    <div className={styles.imageDiv}>
                        <img src={imagem} alt="imagem não suportada"/>
                    </div>

                    <div className={styles.categoryName}>{categoria}</div>

                    <div className={styles.titleDiv}>
                        <h1>{titulo}</h1>
                    </div>

                    <div className={styles.contentDiv}> 
                        <p>Temporada: {temporada}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Episódio: {episodio}</p>
                    </div>

                    <div className={styles.statusDiv}>
                        <p>Status: {status}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Hora: {hora}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    </div>

                    <div className={styles.statusDiv}>
                        <p><span className={`${styles[`status${idstatus}`]}`}></span>{status}</p>
                    </div>

                    <div className={styles.actionsSerie}>
                        <Link to={`/midia/${id}`}>
                            <BsPencil /> Editar
                        </Link>
                        <button onClick={remove}>
                            <BsFillTrashFill /> Excluir
                        </button>
                    </div>
                </div>
            )}
            {category=='Livro' &&(
                <div className={styles.mainDiv}>
                    <div className={styles.imageDiv}>
                        <img src={imagem} alt="imagem não suportada"/>
                    </div>

                    <div className={styles.categoryName}>{categoria}</div>

                    <div className={styles.titleDiv}>
                        <h1>{titulo}</h1>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Capitulo: {capitulo}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Página: {pagina}</p>
                    </div>

                    <div className={styles.contentDiv}> 
                        <p>Total de páginas: {totpagina}</p>
                    </div>

                    <div className={styles.contentDiv}>
                        <p>Link: <Link className={styles.linkmidia} to={link} target='blank'>Clique aqui</Link></p>
                    </div>

                    <div className={styles.statusDiv}>
                        <p><span className={`${styles[`status${idstatus}`]}`}></span>{status}</p>
                    </div>

                    <div className={styles.actionsAnime}>
                        <Link to={`/midia/${id}`}>
                            <BsPencil /> Editar
                        </Link>
                        <button onClick={remove}>
                            <BsFillTrashFill /> Excluir
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Cards