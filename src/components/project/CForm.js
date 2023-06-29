import style from './CForm.module.css'
import Input from '../form/Input'

function CForm(){
    return(
        <form className={style.form_container}>
            
            <div>
                <label htmlFor="statys">Status</label>
                <select name="status" id="status">
                    <option>Ja vi</option>
                    <option>Estou vendo</option>
                    <option>Ainda quero ver</option>
                </select>
            </div>
            <div>
                <Input type="text" text="Titulo" name="titulo" placeholder="Insira aqui o titulo" />
            </div>
            <div>
                <Input type="number" text="Capitulo" name="capitulo" placeholder="Insira qual capitulo você parou"/>
            </div>
            <div>
                <Input type="number" text="Temporada" name="temporada" placeholder="Insira qual temporada você parou"/>
            </div>
            <div>
                <Input type="number" text="Episodio" name="episodio" placeholder="Insira qual episódio você parou"/>
            </div>
            <div>
                <label htmlFor="minuto">Minuto: </label>
                <input type="time" min="00:00" max="10:00:00" name="minuto" id="minuto" />
            </div>
            <div>
                <label htmlFor="scan">Scan: </label>
                <input type="text" name="scan" id="scan" />
            </div>
            <div>
                <label htmlFor="link">Link: </label>
                <input type="link" name="link" id="link" />
            </div>
            <div>
                <label htmlFor="foto">Foto: </label>
                <input type="link" name="foto" id="foto" />
            </div>
            <div>
                <input type="submit" value="Criar" />
            </div>
        </form>
    )
}
export default CForm