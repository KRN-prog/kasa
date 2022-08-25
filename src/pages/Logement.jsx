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
                <section className='centerElements'>
                    <article className='articleLogement'>
                        <div>
                            <h1>{logement.title}</h1>
                            <span>{logement.location}</span>
                            <div>
                                <span>{logement.tags.forEach((item) => item)}</span>
                            </div>
                        </div>
                        <div>
                            <span className="articleLogement__hostName">{logement.host.name}</span>
                            <img src={logement.host.picture} alt={logement.host.name} className="articleLogement__hostPicture" />
                        </div>
                    </article>
                </section>
                <section className='centerElements'>
                    <article>
                        <div>
                            <div>
                                <h3>Description</h3>
                            </div>
                            <div>
                                <p>{logement.description}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Équipements</h3>
                            </div>
                            <div>
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