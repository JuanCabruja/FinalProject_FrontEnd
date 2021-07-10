import img from "../imgBank/pexels-pnw-production-7061909.jpg";
import img2 from "../imgBank/pexels-pnw-production-7061903.jpg";
import img3 from "../imgBank/images.png";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

// import './FrontCards.css';
import "./CollectionCard.css";

// TODO: Estas cards deben estar preparadas para recibir la información del Server, ¿establecer una clase para este expositor?

export default function CollectionCard({ item }) {

  return (
    <NavLink
      to={`/collections/details/${item._id}`}
      className="collectionCardNav"
    >
      <div className="collectionController">
       
          <header className="collectionCardHeader">
            <img
              src={item.author.avatar}
              alt="saffoUserAvatar"
              srcset=""
              className="collectionCardAvatar"
            />

            <div className="collectionCardHeaderInfo">
              <p>{item.author.username}</p>
              <p>{item.supply}</p>
            </div>

          </header>

        <div className="collectionImgWrapper">
          <img src={item?.images[0]} alt="" srcset="" className="collectionCardImg" />
        </div>

        <div className="collectionInfo">
          <div className="collectionInfoLeft">
            <p>{item.name}</p> <p>Cantidad: {item.supply}</p>{" "}
            <p on>precio: {item.price}€</p>
          </div>
          <div className="collectionInfoRight">
            <p>TEST</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
