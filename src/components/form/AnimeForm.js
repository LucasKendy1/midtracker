import Input from "./Input"
import Select from './Select'
import {useEffect, useState} from 'react'
import SubmitButton from '../form/SubmitButton'

function AnimeForm({handleSubmit, midiaData, btnText}){
    const [status, setStatus] = useState([])
    const [midia, setMidia] = useState (midiaData || {
        categoria: 'Anime'
    })

    useEffect(() => {
        fetch("https://mid-tracker-ee3a62f7719c.herokuapp.com/status",{
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setStatus(data)
        })
        .catch((err) => console.log(err))

    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(midia)
        handleSubmit(midia)
    }

    function handleChange(e){
        setMidia({ ...midia, [e.target.name]: e.target.value})
        console.log(midia)
    }

    function handleSelect(e){
        setMidia({ ...midia, status:{
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return(
        <form onSubmit={submit}>
            <Input type="text" text="Titulo" name="titulo" placeholder="Insira o Titulo do anime" handleOnChange={handleChange} value={midia.titulo}/>

            <Input type="number" text="Temporada" name="temporada" placeholder="Insira a temporada do anime" handleOnChange={handleChange} value={midia.temporada}/>

            <Input type="number" text="Episódio" name="episodio" placeholder="Insira o episódio do anime" handleOnChange={handleChange} value={midia.episodio}/>

            <Input type="time" text="Min" name="min" handleOnChange={handleChange} value={midia.min}/>

            <Input type="link" text="Link" name="link" placeholder="Insira o link do anime" handleOnChange={handleChange} value={midia.link}/>

            <Input type="text" text="Link da Imagem do Banner" name="imagem" placeholder="Insira uma imagem da midia" handleOnChange={handleChange} value={midia.imagem}/>
            
            <Select name="Status" text="Selecione o status" options={status} handleOnChange={handleSelect} value={midia.status ? midia.status.id : ''}/>
            
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default AnimeForm