import React from 'react';
import { useState } from 'react'
import TopImage from '../components/TopImage'
import AboutListe from "../components/AboutListe"
import Footer from '../components/Footer'
import AboutPic from '../assets/img/mountain.png'
import '../utils/sass/index.scss'

function About() {
    document.title = 'Kasa - About';
    const [fiabilite, listeFiabilite] = useState(false)
    const [respect, listeRespect] = useState(false)
    const [service, listService] = useState(false)
    const [securite, listSecurie] = useState(false)
    return(
        <React.Fragment>
            <TopImage img={AboutPic} text="" />
            <AboutListe listVar={fiabilite} modifierListe={listeFiabilite} heading="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <AboutListe listVar={respect} modifierListe={listeRespect} heading="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <AboutListe listVar={service} modifierListe={listService} heading="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <AboutListe listVar={securite} modifierListe={listSecurie} heading="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            <Footer />
        </React.Fragment>
    )
}

export default About