import './header.scss'
import logo  from '../../assets/LogoKasaS.png'
import { Link } from 'react-router-dom'

export default function Header({isHomePage, isAboutPage}){

    return(
        <header>
            <Link to='/'>
                <img src={logo} alt='logo Kasa'/>
            </Link>
            <nav>
                <Link to='/' id="nav-link-home" className={isHomePage ? 'nav-link nav-link_active' :'nav-link'} >Accueil</Link>
                <Link to='/about' id="nav-link-about" className={isAboutPage ? 'nav-link nav-link_active' :'nav-link'}>A propos</Link>
            </nav>
        </header>
    )
}