import React from 'react';
import { useState, useEffect } from 'react'
import TopImage from '../components/TopImage'
import CardLogements from '../components/CardLogements'
import Footer from '../components/Footer'
import homePic from '../assets/img/home.png'
import '../utils/sass/index.scss';

function Home() {
    document.title = 'Kasa - Home';
    const [loading, setLoading] = useState(true)
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/logements.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLocations(data)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])
    return(
        <React.Fragment>
            <TopImage img={homePic} text="Chez vous, partout et ailleurs" />
            <section className='centerElements'>
                {loading ? (
                    <div className="lds-ripple"><div></div><div></div></div>
                ) : (
                    <div className="section__articleContainer">
                        {locations.map((location) => (
                            <CardLogements
                                key={location.id}
                                id={location.id}
                                picture={location.cover}
                                title={location.title}
                            />
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Home