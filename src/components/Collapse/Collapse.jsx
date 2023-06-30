import './Collapse.scss'
import { useState } from 'react'

export default function Collapse({title, description}){

const [isHidden, setHidden ] = useState(true)

const collapseDescription = isHidden ? 'collapse_hidden' : 'collapse_active'

const collapseAria = isHidden ? 'true' : 'false'

const collapseChevron = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'

    return(
    <div className="collapse">
        <div className="collapse_title">
            <h2>{title}</h2>
            <button onClick={ () => setHidden(isHidden === true ? false : true)}><i className={collapseChevron}></i></button>
        </div>
        <div className={collapseDescription} aria-hidden={collapseAria} aria-labelledby="collapse">
            {description}
        </div>
    </div>
    )
}