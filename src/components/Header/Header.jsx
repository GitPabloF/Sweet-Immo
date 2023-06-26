import './Header.scss'

import logo  from '../../assets/LOGOKasa.png'
import { Link } from 'react-router-dom'

export default function Header(){
    
    return(
        <header>
            <Link to='/'>
                <img src={logo} alt='logo Kasa'/>
            </Link>
            <nav>
                <Link to='/' className='nav-link'>Accueil</Link>
                <Link to='/about' className='nav-link'>A propos</Link>
            </nav>
        </header>
    )
}