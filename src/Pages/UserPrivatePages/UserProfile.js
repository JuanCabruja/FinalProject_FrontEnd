import { useParams } from 'react-router';
import { Children, useEffect } from 'react';
import { useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { USER_URL } from '../../config/config';
import { useAuthContext } from '../../contexts/AuthContext';
import dummyPic from '../../imgBank/ThisPersonDoesNotExist.jpg';
import './UserProfile.css';
import axios from 'axios';
import { useHistory } from 'react-router';

import DeleteUser from '../../Components/DeleteUser';
import { useForm } from '../../Hooks/useForm';

//TODO: Va a ver haber que ver como implementar en este página una comprobación, si el usuario está logeado y coincide con el token/email mostrará
// un botón para editar el perfil

function UserProfile() {

    const { isAuthenticated, loginUser, token, getAuthHeaders } = useAuthContext();
        
    // const formInitialState = {avatar: "", username: loginUser.username};
    // const [form, handleInputChange] = useForm(formInitialState);


    // Fetch sobre información para la página de usuario. 
    let { username } = useParams();
    const [user, setUser] = useState({});
    useFetch(USER_URL+username, setUser)

    const pageUser = user.user;
    console.log(user);
    console.log(pageUser);
    const userProducts = user.collection;
    console.log(userProducts);
    const history = useHistory();

    const avatar = ""
    if ( pageUser?.avatar === null) {
        const avatar = dummyPic;
      } else {
        const avatar = pageUser?.avatar
    }

    const [inputValue, setInputValue] = useState({})

    const handleAvatarChange = e => {
   
      const inputName = e.target.name;
      const inputValue = e.target.files[0];
      setInputValue(inputValue)

    };

    const handleSubmit = e => {

      e.preventDefault();
      let formData = new FormData();
      formData.append('username', loginUser.username)
      formData.append("avatar", inputValue)
      formData.append('author', loginUser._id);
      formData.append('role', loginUser.role);
      formData.append('_id', loginUser._id)

      console.log(inputValue);
      console.log(formData);
      const option = { headers: getAuthHeaders() }
   
      axios.put(USER_URL+loginUser.username+'/avatar_update', formData, option).then(res => { 
        if (res === 400 ) {
            console.log(res);
        } else {
          alert("Imagen cambiada con exito")
          window.location.reload();
        }

      })

      // fetch(USER_URL+loginUser.username+'/update', {
      //   method:
      // })

    }

    // TODO: Las fotos de perfil están funcionando, hay que organizar el formulario de actualización. 

    // TODO: UNA VEZ SOLUCIONADOS TODOS LOS PARÁMETROS DEL USUARIO EN EL BACKEND, ESTABLECERÉ LAS PETICIONES QUE HARÉ AQUÍ. POR EL MOMENTO DEBO CONTINUAR COON EL HARDCODEO PARA LA MAQUETACIÓN
  
    return (
      <>
      <div className="firstUserBannerContainer">
        {isAuthenticated && loginUser.username == username  
        ? <form action="" onSubmit={handleSubmit}> 
            <img src={pageUser?.avatar} alt="" className="imgContainer"  />
            <input type="file" name="avatar"  onInput={handleAvatarChange} />
            <input type="submit" value="Sube la nueva foto" />
          </form>
        : <img src={pageUser?.avatar} alt="" className="imgContainer" /> }


        <div className="frontDashBoardInfoContainer">
          <h2 className="firstBannertext">  {pageUser?.username} </h2>
          <h4 className="firstBannertext">  OTRO NOMBRE DE LA PERSONA</h4>
          <h5 className="firstBannertext">  Mas información sobre la persona</h5>
        </div>
      </div>

      { isAuthenticated && loginUser.username == username ? <div>Con este código puedo poner los botones que llevan a condiciones especiales del usuario</div>
                                                          :  <></>}
      
      <div className="secondUserBannercontainer">
        <div className="clotheContainer">
         {/* TODO: Implementar render de un componente CARD que obtenga la información de cada prenda que tenga el usuario.  */}
         <h1>Aquí irá un array de componentes que mostrará las prendas que el usuario tenga, esto lo dejaré para gestionar una vez tenga implementado el upload.</h1>
        
        { userProducts?.map(product => <img src={""} alt="" className=""></img>)}
        </div>
      </div>

      <DeleteUser loginUser={loginUser} token={token}/>
      </>
    );
  }
  
  export default UserProfile;
  