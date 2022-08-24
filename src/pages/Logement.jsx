import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import '../utils/sass/index.scss';

function Logement() {
    const { idLogement } = useParams()

    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState([])
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
    for (let i = 0; i < location.length; i++) {
        if (location[i].id === idLogement) {
            console.log(location[i].id)
            console.log(location[i].title)
        }
    }
    return(
        <React.Fragment>
            <span>L'id du logement est { idLogement }</span>
            <Footer />
        </React.Fragment>
    )
}

export default Logement