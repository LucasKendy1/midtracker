import React, { useEffect, useState } from 'react';
import Input from './Input';
import Select from './Select';
import SubmitButton from '../form/SubmitButton';

function FilmesForm({ handleSubmit, midiaData, btnText }) {
  const [status, setStatus] = useState([]);
  const [midia, setMidia] = useState(midiaData || {
    categoria: 'Filme'
  });

  useEffect(() => {
    fetch("http://localhost:5000/status", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setStatus(data);
    })
    .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log(midia);
    handleSubmit(midia);
  };

  function handleChange(e) {
    setMidia({ ...midia, [e.target.name]: e.target.value });
    console.log(midia);
  }

  function handleSelect(e) {
    setMidia({
      ...midia,
      status: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        text="Subcategoria"
        name="subcategoria"
        placeholder="Ex: Terror"
        handleOnChange={handleChange}
        value={midia.subcategoria}
      />

      <Input
        type="text"
        text="Titulo"
        name="titulo"
        placeholder="Insira o Titulo do filme"
        handleOnChange={handleChange}
        value={midia.titulo}
      />

      <Input
        type="time"
        text="Hora/Min"
        name="hora"
        handleOnChange={handleChange}
        value={midia.hora}
      />

      <Input
        type="link"
        text="Link"
        name="link"
        placeholder="Insira o link do filme"
        handleOnChange={handleChange}
        value={midia.link}
      />

      <Input
        type="text"
        text="Link da Imagem do Banner"
        name="imagem"
        placeholder="Insira uma imagem da midia"
        handleOnChange={handleChange}
        value={midia.imagem}
      />

      <Select
        name="Status"
        text="Selecione o status"
        options={status}
        handleOnChange={handleSelect}
        value={midia.status ? midia.status.id : ''}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default FilmesForm;
