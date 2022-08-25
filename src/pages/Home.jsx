import React from 'react';
import { useState, useEffect } from 'react'
import CardLogements from '../components/CardLogements'
import Footer from '../components/Footer'
import '../utils/sass/index.scss';

function Home() {
    document.title = 'Kasa - Home';
    const [loading, setLoading] = useState(true)
    const [locations, setLocations] = useState([])
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
            setLocations(data)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])
    return(
        <React.Fragment>
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