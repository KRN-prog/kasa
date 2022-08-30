import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SliderLogement from '../components/SliderLogement';
import StarsLogement from '../components/StarsLogement';
import ListeDeroulante from '../components/ListeDeroulante';
import arrow from '../assets/img/arrow.png'
import Footer from '../components/Footer'
import '../utils/sass/index.scss'

function Logement() {
    document.title = 'Kasa - Logement';
    const { idLogement } = useParams()
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState([])
    const [picture, setPicture] = useState(0)
    const [description, setDescription] = useState(false)
    const [equipements, setEquipements] = useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:5500/logements.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLocation(data)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])
    
    const logement = location.find(loc => loc.id === idLogement)
    console.log(logement)
    return(
        <React.Fragment>
            {loading ? (
                <div className="lds-ripple"><div></div><div></div></div>
            )
            : logement ?
            (
            <React.Fragment>
                <SliderLogement statePicture={picture} modifierStatePicture={setPicture} data={logement.pictures} />
                <section className='centerElements redText logementInfo'>
                    <article className='articleLogementInfo'>
                        <h1 className='articleLogementInfo__title'>{logement.title}</h1>
                        <span className='articleLogementInfo__location'>{logement.location}</span>
                        <div>
                            {logement.tags.map((tag, tagIndex) => (
                                (<span key={tagIndex} className='tag'>{tag}</span>)
                            ))}
                        </div>
                    </article>
                    <article className='articleLogementInfo articleLogementInfo--user'>
                        <div>
                            <span className="articleLogementInfo__hostName">{logement.host.name}</span>
                            <img src={logement.host.picture} alt={logement.host.name} className="articleLogementInfo__hostPicture" />
                        </div>
                        <StarsLogement val={logement.rating} />
                    </article>
                </section>
                <section className='centerElements redText'>
                    <article className='articleLogementDesc'>
                        <div className='articleLogementDesc__container'>
                            <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3 list'>
                                <h3 className='articleLogementDesc__container__box__heading'>Description</h3>
                                <div>
                                    <img src={arrow} alt="Arrow" className='arrow' onClick={(element) => ListeDeroulante(element, description, setDescription)} />
                                </div>
                            </div>
                            {description ?
                            (
                            <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                                <p>{logement.description}</p>
                            </div>
                            )
                            : null
                            }
                        </div>
                        <div className='articleLogementDesc__container'>
                            <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3 list'>
                                <h3 className='articleLogementDesc__container__box__heading'>Équipements</h3>
                                <div>
                                    <img src={arrow} alt="Arrow" className='arrow' onClick={(element) => ListeDeroulante(element, equipements, setEquipements)} />
                                </div>
                            </div>
                            {equipements ? (
                            <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                                <ul className='ulLogement'>
                                {logement.equipments.map((equipment, equipmentIndex) => (
                                    <li key={equipmentIndex}>{equipment}</li>
                                ))}
                                </ul>
                            </div>
                            ) : null}
                        </div>
                    </article>
                </section>
            </React.Fragment>
            )
            :
            (<span>Mince</span>)
            }
            <Footer />
        </React.Fragment>
    )
}

export default Logement