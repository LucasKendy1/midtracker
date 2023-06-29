import Input from "./Input"
import Select from './Select'
import {useEffect, useState} from 'react'

function AnimeForm(){
    const [status, setStatus] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/status",{
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
    return(
        <form>
            <Input type="text" text="Titulo" name="titulo" placeholder="Insira o Titulo do anime"/>
            <Input type="number" text="Temporada" name="titulo" placeholder="Insira a temporada do anime"/>
            <Input type="number" text="Episódio" name="titulo" placeholder="Insira o episódio do anime"/>
            <Input type="time" text="Min" name="min"/>
            <Input type="link" text="Link" name="link" placeholder="Insira o link do anime"/>
            <Select name="Status" text="Selecione o status" options={status}/>
        </form>
    )
}

export default AnimeForm