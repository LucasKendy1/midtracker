import style from './Icon.module.css'

function Icon({IconName}){
    return(
        <span className="material-symbols-outlined">
            {IconName}
        </span>
    )
}

export default Icon