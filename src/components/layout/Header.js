import svg from '../../logo.svg'
import style from './Header.module.css'
import { LuAlignLeft } from "react-icons/lu";
import { LuUser } from "react-icons/lu";

function Header({event}){
   
    return(
        <header className={style.container_header}>

            <LuAlignLeft className={style.icone} onClick={event}/>
            <img src={svg} />
            <LuUser className={style.icone}/>
            
        </header>
    )
}

export default Header