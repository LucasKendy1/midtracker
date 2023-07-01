import Input from "./Input"
import Select from './Select'
import {useEffect, useState} from 'react'
import SubmitButton from '../form/SubmitButton'

function FilmesForm({handleSubmit, midiaData}){
    const [status, setStatus] = useState([])
    const [midia, setMidia] = useState (midiaData || {})
    const [selectValue, setSelectValue] = useState('');

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

    const handleSelecao = (indice) => {
        setSelectValue(indice)
    }

    return(
        <form onSubmit={submit}>
            <Input type="text" text="Subcategoria" name="subcategoria" placeholder="Ex: Terror" handleOnChange={handleChange}/>

            <Input type="text" text="Titulo" name="titulo" placeholder="Insira o Titulo do filme" handleOnChange={handleChange}/>
            
            <Input type="time" text="Hora/Min" name="hora" handleOnChange={handleChange}/>

            <Input type="link" text="Link" name="link" placeholder="Insira o link do filme" handleOnChange={handleChange}/>

            <Select name="Status" text="Selecione o status" options={status} handleOnChange={handleSelect} onSelecao = {handleSelecao} value={midia.status ? midia.status.id : ''}/>

            <SubmitButton text="Enviar"/>
        </form>
    )
}

export default FilmesForm