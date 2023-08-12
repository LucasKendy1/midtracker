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
   
    const [selectValue, setSelectValue] = useState(0);

    const navigate = useNavigate()

    function handleSelect(e){
        setSelectValue(e.target.value)
    }

    function createPost(midia){
        fetch("https://mid-tracker-ee3a62f7719c.herokuapp.com/midias",{
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },    
            body: JSON.stringify(midia)
        }).then((
            resp => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/', { state: { message: 'Midia criada com sucesso :>!'}})
        })
        ).catch(err => console.log(err))
    }

    useEffect(() => {
        fetch("https://mid-tracker-ee3a62f7719c.herokuapp.com/categorias",{
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
               <FilmesForm handleSubmit={createPost} btnText={"Enviar"}/> 
            )}
            {selectValue == 2 && (
               <AnimeForm handleSubmit={createPost} btnText={"Enviar"}/>
            )}
            {selectValue == 3 && (
               <SerieForm handleSubmit={createPost} btnText={"Enviar"}/>
            )}
            {selectValue == 4 && (
               <MangaForm handleSubmit={createPost} btnText={"Enviar"}/>
            )}
            {selectValue == 5 && (
               <LivroForm handleSubmit={createPost} btnText={"Enviar"}/>
            )}

        </section>
    )
}

export default New