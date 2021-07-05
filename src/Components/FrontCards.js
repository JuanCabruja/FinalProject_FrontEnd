import React from 'react'
import './FrontCards.css';
import { NavLink } from 'react-router-dom';
import img from '../imgBank/pexels-pnw-production-7061909.jpg';
import img2 from '../imgBank/pexels-pnw-production-7061903.jpg';
import img3 from '../imgBank/images.png'

// TODO: Debo gestionar el diseño de las cartas, también debo hacer la configuración para la imagen dummy. 


export default function FrontCards({avatar, username}) {
    return (
        <div className="frontCardContainer">
            <NavLink to={"/"+username} ><img src={avatar} alt="" srcset="" className="frontCardUserProfilePic"/></NavLink>
            <div className="frontCardInfoContainer"> 
                <h2>{username}</h2>
            </div>
        </div>
    )
}
