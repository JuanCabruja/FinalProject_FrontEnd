import { useParams } from "react-router";
import { Children, useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { USER_URL } from "../../config/config";
import { useAuthContext } from "../../contexts/AuthContext";
import dummyPic from "../../imgBank/ThisPersonDoesNotExist.jpg";
import "./UserProfile.css";
import axios from "axios";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

import { useForm } from "../../Hooks/useForm";

//TODO: IMPORT para hacer una prueba visual

import CollectionCard from "../../Components/CollectionCard"
import ProfileItem from "../../Components/ProfileItem";

//TODO: Va a ver haber que ver como implementar en este página una comprobación, si el usuario está logeado y coincide con el token/email mostrará
// un botón para editar el perfil



function UserProfile() {
  const { isAuthenticated, loginUser, token, getAuthHeaders, isCreator } =
    useAuthContext();

  // const formInitialState = {avatar: "", username: loginUser.username};
  // const [form, handleInputChange] = useForm(formInitialState);

  // Fetch sobre información para la página de usuario.
  let { username } = useParams();
  const [user, setUser] = useState({});

  useFetch(USER_URL + username, setUser);

  const pageUser = user.user;
  console.log(user);
  console.log(pageUser);
  const userProducts = user.collection;
  console.log(userProducts);
  const history = useHistory();

  //TODO: Tengo que implementar un avatar Dummy
  
  // TODO: Las fotos de perfil están funcionando, hay que organizar el formulario de actualización.

  // TODO: UNA VEZ SOLUCIONADOS TODOS LOS PARÁMETROS DEL USUARIO EN EL BACKEND, ESTABLECERÉ LAS PETICIONES QUE HARÉ AQUÍ. POR EL MOMENTO DEBO CONTINUAR COON EL HARDCODEO PARA LA MAQUETACIÓN

  // useEffect(() => {
  //   window.location.reload();


  //   return () => {};
  // }, []);

  const testStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0.1%, rgba(255, 255, 255, 1)), url(' + pageUser?.avatar + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
  };


  return (
    <>
      {/* <div className="userBackground" style={testStyle}> */}
        <div className="mainPageContainer" style={testStyle}>
        
            <div className="userFirstBanner backgroundHandler">
              <div className="userImgWrapper userAvatar flexHandler"><img src={pageUser?.avatar} alt="" className=" imgContainer" /></div>
                <div className="username flexHandler"><h1> {pageUser?.username}</h1> </div>
                <div className="punctuation flexHandler"> <p>500</p><p>punctuation</p></div>
                <div className="likes flexHandler"><p>500</p><p>likes</p></div>
                <div className="followers flexHandler"> <p>500</p><p>followers</p></div>
            </div>

          <div className="items">
            <h1>BIO:</h1>
          </div>
          <div className="userBio flexHandler backgroundHandler">
            <p>{pageUser?.description}</p>
          </div>

          <div className="items">
            {pageUser?.role === "CREATOR" ? <h1>Colecciones:</h1>
            : <h1>Prendas:</h1>}
          </div>
          <div className="secondUserBannercontainer flexHandler backgroundHandler">
            {/* <div className="clotheContainer"> */}
              {/* TODO: Implementar render de un componente CARD que obtenga la información de cada prenda que tenga el usuario.  */}
              {/* TODO: Está implementado de forma momentánea las cards para las colecciones del market */}
              {userProducts?.map((item) => (
                <ProfileItem item={item}/>
              ))}
            {/* </div> */}
          </div>
        </div>
      {/* </div> */}


      {/* TODO: NO SÉ TODAVÍA SI ENCAJAR ESTO ACÁ, PERO CASI MEJOR QUE NO.  */}
      {isAuthenticated && loginUser.username == username ? (
                <NavLink to={"config/"+loginUser.username}>EDITAR</NavLink>
              ) : (
                <></>
              )}

    </>
  );
}

export default UserProfile;
