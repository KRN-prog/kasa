import filledStar from '../assets/img/filledStar.png'
import emptyStar from '../assets/img/emptyStar.png'

function starDifference(arr, starDifferenceNB) {
    for (let i = 0; i < starDifferenceNB; i++) {
        arr.push(<img key={arr} src={emptyStar} alt="étoile vide" />)
    }
    return arr
}

function StarsLogement(props) {
    const value = props.val
    const range = [1,2,3,4,5]
    let starDifferenceArr = []
    const difference = range.length - value
    return(
        <div>
        {range.map((range) =>
            value >= range ? <span key={`filled${range.toString()}`}><img src={filledStar} alt="étoile rempli" /></span> : null
        )}
        {starDifference(starDifferenceArr, difference)}
        </div>
    )
}

export default StarsLogement