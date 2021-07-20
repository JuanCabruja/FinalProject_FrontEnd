import React from "react";
import './ProfileItem.css'
import { NavLink } from "react-router-dom";

export default function ProfileCreatorItem({ item }) {

  return (
      <NavLink to={`/collections/details/${item._id}`} className="collectionCardNav">
        <div className="itemController">
          <div className="itemImgWrapper">
            <img
              src={item.images[0]}
              alt=""
              srcSet=""
              className="itemCardImg"
            />
          </div>
          <div className="itemInfo">
            <div className="itemInfoLeft">
              <p>{item.name}</p> <p>Cantidad: {item.supply}</p> <p>precio: {item.price}€</p>
            </div>
            <div className="itemInfoRight">
              <p>TEST</p>
        
            </div>
          </div>
        </div>
      </NavLink>
  );
}
