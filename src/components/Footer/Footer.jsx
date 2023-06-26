import './Footer.scss'
import logo from '../../assets/Logo_BW.png'

export default function Footer(){
    return(
        <footer>
            <img src={logo} alt='logo kasa'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}