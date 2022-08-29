import rightArrow from '../assets/img/rightArrow.png'
import leftArrow from '../assets/img/leftArrow.png'
function SliderLogement(picture) {
    console.log(picture)
    //return <div>ee</div>
    return(
        <section className='centerElements'>
            <article className='logementPic'>
                <img src={picture.data[picture.statePicture]} alt="" className='imgsLogement' />
                <div onClick={() => {picture.statePicture === 0 ? picture.modifierStatePicture(picture.data.length - 1) : picture.modifierStatePicture(picture.statePicture - 1)}} className='previousPic'><img src={leftArrow} alt="" /></div>
                <div className='picCounter'>{picture.statePicture + 1} / {picture.data.length}</div>
                <div onClick={() => {picture.statePicture < picture.data.length - 1 ? picture.modifierStatePicture(picture.statePicture + 1) : picture.modifierStatePicture(0)}} className='nextPic'><img src={rightArrow} alt="" /></div>
            </article>
        </section>
    )
}

export default SliderLogement