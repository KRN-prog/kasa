import { Link } from 'react-router-dom'
import '../utils/sass/index.scss';

function Error404() {
    document.title = 'Kasa - 404';
    return(
        <section className='sectionError'>
            <h1 className='sectionError__error404'>404</h1>
            <span className='sectionError__msg'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/" className='sectionError__link link'>Retourner sur la page d’accueil</Link>
        </section>
    )
}

export default Error404