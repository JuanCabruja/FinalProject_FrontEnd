
import { NavLink } from "react-router-dom";

// import './FrontCards.css';
import "./CollectionCard.css";

//TODO: Arreglar el diseño 

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
