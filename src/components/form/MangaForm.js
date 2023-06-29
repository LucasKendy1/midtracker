import Input from "./Input"
import Select from './Select'
import {useEffect, useState} from 'react'

function MangaForm(){
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
            <Input type="text" text="Titulo" name="titulo" placeholder="Insira o Titulo do mangá"/>
            <Input type="number" text="Capitulo" name="capitulo" placeholder="Insira o capitulo"/>
            <Input type="number" text="Temporada" name="temporada" placeholder="Insira a temporada"/>
            <Input type="text" text="Scan" name="scan" placeholder="Insira o nome da Scan"/>
            <Input type="time" text="Hora/Min" name="hora"/>
            <Input type="link" text="Link" name="link" placeholder="Insira o link do mangá"/>
            <Select name="Status" text="Selecione o status" options={status}/>
        </form>
    )
}

export default MangaForm