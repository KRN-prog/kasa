import ListeDeroulante from '../components/ListeDeroulante'
import arrow from '../assets/img/arrow.png'
function AboutListe({listVar, modifierListe, heading, content}) {
    return(
    <section className='centerElements redText'>
        <article>
            <div className='articleLogementDesc__container'>
                <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3 list'>
                    <h3 className='articleLogementDesc__container__box__heading'>{heading}</h3>
                    <div>
                        <img src={arrow} alt="Arrow" className='arrow'  onClick={(element) => ListeDeroulante(element,listVar, modifierListe)} />
                    </div>
                </div>
                {listVar ?
                (
                <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                    <p>{content}</p>
                </div>
                )
                : null
                }
            </div>
        </article>
    </section>
    )
}

export default AboutListe