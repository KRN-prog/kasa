import React from 'react';
import arrow from '../assets/img/arrow.png'
import Footer from '../components/Footer'
import '../utils/sass/index.scss'

function About() {
    document.title = 'Kasa - About';
    return(
        <React.Fragment>
            <section className='centerElements redText'>
                <article>
                    <div className='articleLogementDesc__container'>
                        <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3 list'>
                            <h3 className='articleLogementDesc__container__box__heading'>Fiabilité</h3>
                            <div>
                                <img src={arrow} alt="Arrow" className='arrow' />
                            </div>
                        </div>
                        <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                        </div>
                    </div>
                </article>
            </section>

            <section className='centerElements redText'>
                <article>
                    <div className='articleLogementDesc__container'>
                        <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3 list'>
                            <h3 className='articleLogementDesc__container__box__heading'>Respect</h3>
                            <div>
                                <img src={arrow} alt="Arrow" className='arrow' />
                            </div>
                        </div>
                        <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    </div>
                </article>
            </section>

            <section className='centerElements redText'>
                <article>
                    <div className='articleLogementDesc__container'>
                        <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3 list'>
                            <h3 className='articleLogementDesc__container__box__heading'>Service</h3>
                            <div>
                                <img src={arrow} alt="Arrow" className='arrow' />
                            </div>
                        </div>
                        <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                        </div>
                    </div>
                </article>
            </section>

            <section className='centerElements redText'>
                <article>
                    <div className='articleLogementDesc__container'>
                        <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3 list'>
                            <h3 className='articleLogementDesc__container__box__heading'>Sécurité</h3>
                            <div>
                                <img src={arrow} alt="Arrow" className='arrow' />
                            </div>
                        </div>
                        <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                        </div>
                    </div>
                </article>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default About