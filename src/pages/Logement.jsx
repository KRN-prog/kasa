import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import '../utils/sass/index.scss';

function Logement() {
    const { idLogement } = useParams()
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState([])
    const [picture, setPicture] = useState(0)

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
                    <article>
                        <img src={logement.pictures[picture]} alt="" className='imgsLogement' />
                        <span onClick={() => {picture === 0 ? setPicture(logement.pictures.length - 1) : setPicture(picture - 1)}}>Précédent</span>
                        <span onClick={() => {picture < logement.pictures.length - 1 ? setPicture(picture + 1) : setPicture(0)}}>Suivant</span>
                    </article>
                </section>
                <section className='centerElements redText logementInfo'>
                    <article className='articleLogementInfo'>
                        <h1 className='articleLogementInfo__title'>{logement.title}</h1>
                        <span className='articleLogementInfo__location'>{logement.location}</span>
                        <div>
                            <span>{logement.tags.forEach((item) => item)}</span>
                        </div>
                    </article>
                    <article className='articleLogementInfo articleLogementInfo--user'>
                        <span className="articleLogementInfo__hostName">{logement.host.name}</span>
                        <img src={logement.host.picture} alt={logement.host.name} className="articleLogementInfo__hostPicture" />
                    </article>
                </section>
                <section className='centerElements redText'>
                    <article className='articleLogementDesc'>
                        <div className='articleLogementDesc__container'>
                            <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3'>
                                <h3 className='articleLogementDesc__container__box__heading'>Description</h3>
                            </div>
                            <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                                <p>{logement.description}</p>
                            </div>
                        </div>
                        <div className='articleLogementDesc__container'>
                            <div className='articleLogementDesc__container__box articleLogementDesc__container__box--h3'>
                                <h3 className='articleLogementDesc__container__box__heading'>Équipements</h3>
                            </div>
                            <div className='articleLogementDesc__container__box articleLogementDesc__container__box--desc'>
                                <ul>
                                    <li>{logement.equipments.forEach(item => {<span>{item}</span>})}</li>
                                </ul>
                            </div>
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