import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StarsLogement from '../components/StarsLogement';
import arrow from '../assets/img/arrow.png'
import rightArrow from '../assets/img/rightArrow.png'
import leftArrow from '../assets/img/leftArrow.png'
import Footer from '../components/Footer'
import '../utils/sass/index.scss'

function Logement() {
    document.title = 'Kasa - Logement';
    const { idLogement } = useParams()
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState([])
    const [picture, setPicture] = useState(0)
    const [liste, setListe] = useState(false)
    const eventListe = () => liste === false ? setListe(true) : setListe(false)

    useEffect(() => {
        fetch('http://127.0.0.1:5500/logements.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((response) => {
            console.log("===== RESPONSE =====",response)
            return response.json()
        })
        .then((data) => {
            console.log("===== JSON =====",data)
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
                <section className='centerElements'>
                    <article className='logementPic'>
                        <img src={logement.pictures[picture]} alt="" className='imgsLogement' />
                        <div onClick={() => {picture === 0 ? setPicture(logement.pictures.length - 1) : setPicture(picture - 1)}} className='previousPic'><img src={leftArrow} alt="" /></div>
                        <div className='picCounter'>{picture + 1} / {logement.pictures.length}</div>
                        <div onClick={() => {picture < logement.pictures.length - 1 ? setPicture(picture + 1) : setPicture(0)}} className='nextPic'><img src={rightArrow} alt="" /></div>
                    </article>
                </section>
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
                                    <img src={arrow} alt="Arrow" className='arrow' onClick={eventListe} />
                                </div>
                            </div>
                            {liste ?
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
                                    <img src={arrow} alt="Arrow" className='arrow' />
                                </div>
                            </div>
                            {liste ? (
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