import { Link } from 'react-router-dom'

function CardLogements({ id, title, picture }) {
    return (
        <article className="article">
            <Link to={`/logement/${id}`}>
                <img className="article__picture" src={picture} alt={title} />
                <div className="article__titleContainer">
                    <span>{title}</span>
                </div>
            </Link>
        </article>
    )
}

export default CardLogements