import  './Error.scss'
import { Link } from 'react-router-dom'


export default function Error(){
    return(
        <div className='error'>
            <p>404</p>
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <Link className="error_link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}