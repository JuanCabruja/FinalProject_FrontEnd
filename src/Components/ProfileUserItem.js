import React from "react";
import './ProfileItem.css'

export default function ProfileUserItem({ item }) {
    
    const images = []
    item.parentCollection.images.forEach(image => (images.push(image)))

    const parentCollection = item.parentCollection; 

  return (
      <div className="itemController">
        <div className="itemImgWrapper">

          <img
            src={parentCollection.images[0]}
            alt=""
            srcSet=""
            className="itemCardImg"
          />
        </div>

        <div className="itemInfo">
          <div className="itemInfoLeft">
            <p>{item.name}</p> <p>Cantidad: {parentCollection.supply}</p> <p>precio: {parentCollection.price}€</p>
          </div>
          <div className="itemInfoRight">
            <p>Número: {item.productNumberInCollection}</p>
           
          </div>
        </div>
      </div>
  );
}
