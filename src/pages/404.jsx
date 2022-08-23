import { Link } from 'react-router-dom'

function Error404() {
    return(
        <div>
            <div>Cette page n'existe pas</div>
            <Link to="/">Accueil</Link>
        </div>
    )
}

export default Error404