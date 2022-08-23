import { useState, useEffect } from 'react'
import CardLogements from '../components/CardLogements'
import '../utils/sass/index.scss';
//import LogementsData from '../data/logements.json'

function Home() {
    const [loading, setLoading] = useState(true)
    const [locations, setLocation] = useState([])
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
    return(
        <section>
            {loading ? (
                <div>AAAA</div>
            ) : (
                <div className="section__articleContainer">
                    {locations.map((location) => (
                        <CardLogements
                            key={location.id}
                            picture={location.cover}
                            title={location.title}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Home