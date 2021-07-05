import './FrontCards.css';
import img from '../imgBank/pexels-pnw-production-7061909.jpg';
import img2 from '../imgBank/pexels-pnw-production-7061903.jpg';
import img3 from '../imgBank/images.png'
import './MarketCard.css';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

// TODO: Estas cards deben estar preparadas para recibir la información del Server, ¿establecer una clase para este expositor?


export default function MarketCard({images, name, author, id}) {

    return (
        <NavLink to={`/collections/${id}`}> <div className="frontCardContainer">
            <img src={images[0]} alt="" srcset="" className="frontCardUserProfilePic"/>
            <div className="frontCardInfoContainer"> 
                <h2>{name}</h2>
                {images.map(image => {
                    <img src={image} alt="" srcset="" />
                })}
            </div>
        </div>
        </NavLink>
    )
}
