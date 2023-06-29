import Input from "./Input"
import Select from './Select'
import {useEffect, useState} from 'react'
 
function LivroForm(){
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
            <Input type="text" text="Titulo" name="titulo" placeholder="Insira o Titulo do livro"/>
            <Input type="number" text="Capitulo" name="capitulo" placeholder="Insira o capitulo"/>
            <Input type="number" text="Página" name="pagina" placeholder="Insira a pagina que parou"/>
            <Input type="number" text="Total de páginas" name="totpagina" placeholder="Insira o total de paginas"/>
            <Input type="link" text="Link" name="link" placeholder="Insira o link do mangá"/>
            <Select name="Status" text="Selecione o status" options={status}/>
        </form>
    )
}

export default LivroForm