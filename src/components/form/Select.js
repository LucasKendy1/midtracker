import style from './Select.module.css'

function Select({ text, name, options, handleOnChange, value, }){

    // const OnChange = (event) => {
    //     const indice = event.target.value
    //     onSelecao(indice)
    // }
    console.log(options)
    return(
        <div className={style.input}>
            <label className={style.label} htmlFor={name}>{text}:</label>
            <select name={name} id={name} className={style.inputtext} onChange={handleOnChange} value={value}>
                <option disabled>
                    Selecione uma opção
                </option>
                
                {options.map((option) => (
                    <option 
                    value={option.id} key={option.id}>{option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select