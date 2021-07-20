import React from "react";
import "./FrontCards.css";
import { NavLink } from "react-router-dom";


// TODO: Debo gestionar el diseño de las cartas, también debo hacer la configuración para la imagen dummy.

export default function FrontCardCreators({ item }) {

  return (
    <NavLink to={`${item.username}`} className="collectionCardNav">
      <div className="itemController">
        <div className="itemImgWrapper">
          <img src={item?.avatar} alt="" srcSet="" className="itemCardImg" />
        </div>
        <div className="itemInfo">
          <div className="itemInfoLeft">
            <h3>{item?.username}</h3>{" "}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
