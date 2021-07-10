import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BUYSELL_URL, COLLECTION_URL } from "../../config/config";
import { useAuthContext } from "../../contexts/AuthContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { details } from "../../config/carousel_config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import "./CollectionDetails.css";

export default function CollectionDetails() {
  // TODO: Ya está implementado el Fetch que me da la colección, ahora tengo que hacer el botón para realizar la compra
  // TODO: TENGO QUE VER EL TEMA DE QUE HACER CON LAS IMÁGENES HORIZONTALES.  
  // Y hacer el front de esta página

  // Importación de Parámetros
  let { collectionId } = useParams();
  const { loginUser, isAuthenticated, getToken, getAuthHeaders } =
    useAuthContext();

  // Fetch Básico para el funcionamiento de la Página
  const [collection, setCollection] = useState({});
  const [collectionImages, setCollectionImages] = useState([]);
  const [avatar, setAvatar] = useState("");

  const CollectionInfo = async () => {
    const query = await fetch(COLLECTION_URL + 'details/' + collectionId);
    const response = await query.json();

    // if (response.status === 304) {
    //   await setCollectionImages(response.collection[0].images);
    //   await setCollection(response.collection[0]);

    // } else {
    //   await setCollectionImages(response.collection[0].images);
    //   await setCollection(response.collection[0]);
    // }

    setCollectionImages(response.collection[0].images);
    setCollection(response.collection[0]);
    setAvatar(response.collection[0].author.avatar);
  };

  useEffect(() => {
    CollectionInfo();

    return () => {};
  }, []);

  console.log(collection);
  console.log(loginUser);
  console.log(collectionImages);
  console.log(avatar);

  const form = {
    parentCollection: collection._id,
    price: collection.price,
    userBuyer: loginUser._id,
    userSeller: collection.author,
  };

  const HandleBuy = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },

      body: JSON.stringify(form),
    };

    const response = await fetch(
      BUYSELL_URL + `collections/${collectionId}`,
      options
    );
    const data = await response.json();

    if (response.status === 200) {
      console.log(data);
    } else if (response.status === 400) {
      alert("No hay productos los vendimos todos");
    }
  };


  return (
    <div className="collectionDetailsContainer grid">
      <div className="collectionDetailsSideLeft">
        <header className="displayerCollectionDetailsHeader">
          <img
            src={avatar}
            alt=""
            srcset=""
            className="detailsImgContainer avatar"
          />
          <div className="displayerCollectionHeaderInfo">
            <h1 className="author">{collection.author?.username}</h1>
            <h2>{collection.name}</h2>
          </div>
        </header>

        <div className="displayerCollectionDescription">
          <p>
            {collection.description}
          </p>
        </div>

        <div className="displayerCollectionDetailsBottom">
          <h2>Detalles del Producto:</h2>
          <h3>Existencias totales: {collection.supply}</h3>
          <h3>Precio: {collection.price}€</h3>
          <h3>Otro dato</h3>
          <h3>Otro dato</h3>
        </div>

        <div className="displayerCollectionDetailsButtons">
          <form action="" onSubmit={HandleBuy}>
            <button value="Buy now" type="submit" className="buyButton">
              Buy Now
            </button>
          </form>
          
          <form action="">
          <FontAwesomeIcon icon={faHeart} className="collectionLikeButton" size="3x" />
          </form>
        </div>
      </div>

      <Carousel
        swipeable={false}
        responsive={details}
        showDots={false}
        transitionDuration={1000}
        infinite={true}
        containerClass="collectionDetailSideRight"
        itemClass="collection-carousel-image collectionDetailSideRight"
        // draggable={false}
        // ssr={true} // means to render carousel on server-side.
        //  autoPlay={this.props.deviceType !== "mobile" ? true : false} autoPlaySpeed={1000} keyBoardControl={true}
        //  removeArrowOnDeviceType={["tablet", "mobile"]} customTransition="all .5"
        // deviceType={this.props.deviceType} dotListClass="custom-dot-list-style"
      >
        {collectionImages === [] ? (
          <p>wait</p>
        ) : (
          collectionImages.map((image) => (
            <img src={image} className="collection-carousel-image" />
          ))
        )}
      </Carousel>
    </div>
  );
}
