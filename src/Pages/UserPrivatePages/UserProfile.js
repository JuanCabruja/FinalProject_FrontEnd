import { useParams } from 'react-router';
import { Children, useEffect } from 'react';
import { useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { USER_URL } from '../../config/config';
import { useAuthContext } from '../../contexts/AuthContext';
import dummyPic from '../../imgBank/ThisPersonDoesNotExist.jpg';
import './UserProfile.css';

import DeleteUser from '../../Components/DeleteUser';

//TODO: Va a ver haber que ver como implementar en este página una comprobación, si el usuario está logeado y coincide con el token/email mostrará
// un botón para editar el perfil

function UserProfile() {

    const { isAuthenticated, loginUser, token } = useAuthContext();
    let { username } = useParams();    
    const [user, setUser] = useState({});

    useFetch(USER_URL+username, setUser)

    const pageUser = user.user;
    console.log(user);
    const userProducts = user.products;
    console.log(userProducts);
  

    // TODO: UNA VEZ SOLUCIONADOS TODOS LOS PARÁMETROS DEL USUARIO EN EL BACKEND, ESTABLECERÉ LAS PETICIONES QUE HARÉ AQUÍ. POR EL MOMENTO DEBO CONTINUAR COON EL HARDCODEO PARA LA MAQUETACIÓN
    
    return (
      <>
      <div className="firstUserBannerContainer">
        <img src={dummyPic} alt="" className="imgContainer" />
        <div className="frontDashBoardInfoContainer">
          <h2 className="firstBannertext">  {pageUser?.username} </h2>
          <h4 className="firstBannertext">  OTRO NOMBRE DE LA PERSONA</h4>
          <h5 className="firstBannertext">  Mas información sobre la persona</h5>
        </div>
      </div>

      { isAuthenticated && loginUser.username == username ? <div>Hola</div>
                                                          :  <></>}
      
      <div className="secondUserBannercontainer">
        <div className="clotheContainer">
         {/* TODO: Implementar render de un componente CARD que obtenga la información de cada prenda que tenga el usuario.  */}
         <h1>Aquí irá un array de componentes que mostrará las prendas que el usuario tenga, esto lo dejaré para gestionar una vez tenga implementado el upload.</h1>
        
        { userProducts?.map(product => <img src={product.parentCollection.images[0]} alt="" className=""></img>)}
        </div>
      </div>

      <DeleteUser loginUser={loginUser} token={token}/>
      </>
    );
  }
  
  export default UserProfile;
  