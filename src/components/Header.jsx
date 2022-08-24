import { Link } from 'react-router-dom'
import logo from '../assets/img/kasa.png'

function Header() {
    return(
        <nav className='nav centerElements'>
            <Link to="/"><img src={logo} alt="Kasa logo" /></Link>
            <div>
                <Link to="/" className='nav__link link redText'>Accueil</Link>
                <Link to="/about" className='nav__link link redText'>A propos</Link>
            </div>
        </nav>
    )
}

export default Header