import Input from "./Input"
import Select from './Select'
import { useEffect, useState } from 'react'
import SubmitButton from '../form/SubmitButton'

function LivroForm({ handleSubmit, midiaData }) {
    const [status, setStatus] = useState([])
    const [midia, setMidia] = useState (midiaData || {
        categoria: 'Livro'
    })

  useEffect(() => {
    fetch("http://localhost:5000/status", {
      method: "GET",
      headers: {
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
  return (
    <form onSubmit={submit}>
      <Input type="text" text="Titulo" name="titulo" placeholder="Insira o Titulo do livro" handleOnChange={handleChange}/>

      <Input type="number" text="Capitulo" name="capitulo" placeholder="Insira o capitulo" handleOnChange={handleChange}/>

      <Input type="number" text="Página" name="pagina" placeholder="Insira a pagina que parou" handleOnChange={handleChange}/>

      <Input type="number" text="Total de páginas" name="totpagina" placeholder="Insira o total de paginas" handleOnChange={handleChange}/>

      <Input type="link" text="Link" name="link" placeholder="Insira o link do mangá" handleOnChange={handleChange}/>

      <Select name="Status" text="Selecione o status" options={status} handleOnChange={handleSelect} value={midia.status ? midia.status.id : ''}/>

            <SubmitButton text="Enviar"/>
    </form>
  )
}

export default LivroForm