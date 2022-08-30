function TopImage({img, text}) {
    return(
        <div className="topImage">
            <img className="topImage__img" src={img} alt={img} />
            <span className="topImage__txt">{text}</span>
        </div>
    )
}

export default TopImage