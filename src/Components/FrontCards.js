import React from 'react'
import './FrontCards.css';
import img from '../imgBank/pexels-pnw-production-7061909.jpg';
import img2 from '../imgBank/pexels-pnw-production-7061903.jpg';
import img3 from '../imgBank/images.png'

// TODO: Estas cards deben estar preparadas para recibir la información del Server, ¿establecer una clase para este expositor?


export default function FrontCards() {
    return (
        <div className="frontCardContainer">
            <img src={img3} alt="" srcset="" className="frontCardUserProfilePic"/>
            <div className="frontCardInfoContainer"> 
                <h2>PRUEBA PRUEBA PRUEBA</h2>
            </div>
        </div>
    )
}
