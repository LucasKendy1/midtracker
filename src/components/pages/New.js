import style from './New.module.css'
import Select from '../form/Select'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import FilmesForm from '../form/FilmesForm'
import MangaForm from '../form/MangaForm'
import SerieForm from '../form/SerieForm'
import AnimeForm from '../form/AnimeForm'
import LivroForm from '../form/LivroForm'

function New(){
    
    const [categorias, setCategorias] = useState([])
   
    const [selectValue, setSelectValue] = useState(1);

    const navigate = useNavigate()

    function handleSelect(e){
        setSelectValue(e.target.value)
    }

    function createPost(midia){
        fetch("http://localhost:5000/midias",{
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },    
            body: JSON.stringify(midia),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)

            navigate('/', { state: { message: 'Midia criada com sucesso!'}})
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetch("http://localhost:5000/categorias",{
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategorias(data)
        })
        .catch((err) => console.log(err))

    }, [])

    return(
        
        <section className={style.new_container}>
            <h1>Add nova midia</h1>
            <p>Preencha o formulario abaixo para add sua midia</p>
            
            <Select name="categoria" text="Selecione a categoria" options={categorias} handleOnChange={handleSelect} value={categorias.name}/>
            
            {selectValue == 1 && (
               <FilmesForm handleSubmit={createPost}/> 
            )}
            {selectValue == 2 && (
               <AnimeForm handleSubmit={createPost}/>
            )}
            {selectValue == 3 && (
               <SerieForm handleSubmit={createPost}/>
            )}
            {selectValue == 4 && (
               <MangaForm handleSubmit={createPost}/>
            )}
            {selectValue == 5 && (
               <LivroForm handleSubmit={createPost}/>
            )}

        </section>
    )
}

export default New