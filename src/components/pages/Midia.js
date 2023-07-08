import styles from './Midia.module.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Midia(){
    const {id} = useParams()
    const [midia, setMidias] = useState([])
    const [showMidiaForm, setShowMidiaForm] = useState(false)

    console.log(midia)
    useEffect(() => {
        fetch(`http://localhost:5000/midias/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then(resp => resp.json())
        .then((data) =>{
            setMidias(data)
        })
        .catch(err => console.log(err))
    }, [id])

    function toggleMidiaForm(){
        setShowMidiaForm(!showMidiaForm)
    }

    return(
        <div className={styles.body}>
            <h1>{midia.titulo}</h1>
            <button onClick={toggleMidiaForm}>{!showMidiaForm ? "Editar midia" : "Fechar"}</button>
            
        </div>
    )
}

export default Midia