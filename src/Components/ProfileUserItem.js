import React from "react";
import './ProfileItem.css'

export default function ProfileUserItem({ item }) {

    //TODO: En esta área irá toda la gestión del desengranaje de los items Producto, que luego me será útil en términos generales para la plataforma. 

    console.log(item);
    
    // Separación de las Imágenes
    const images = []
    item.parentCollection.images.forEach(image => (images.push(image)))

    const parentCollection = item.parentCollection; 
    console.log(parentCollection);
    console.log(images);

  return (
      <div className="itemController">
        <div className="itemImgWrapper">

          <img
            src={parentCollection.images[0]}
            alt=""
            srcset=""
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
