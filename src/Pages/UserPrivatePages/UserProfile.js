import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { USER_URL } from "../../config/config";
import { useAuthContext } from "../../contexts/AuthContext";
import dummyPic from "../../imgBank/ThisPersonDoesNotExist.jpg";
import "./UserProfile.css";
import { NavLink } from "react-router-dom";
import ProfileCreatorItem from "../../Components/ProfileCreatorItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

import ProfileUserItem from "../../Components/ProfileUserItem";


function UserProfile() {
  const { isAuthenticated, loginUser, isCreator } =
    useAuthContext();

  //TODO: Tengo que implementar un avatar Dummy

  // Fetch sobre información para la página de usuario.
  let { username } = useParams();
  const [user, setUser] = useState({});
  const [pageUser, setPageUser] = useState({})
  const [userProducts, setUserProducts] = useState([])



  const mainVisit = async e => {

    const query = await fetch(USER_URL + username)
    const response = await query.json()
    console.log(response);

    setUser(response)
    setPageUser(response.user)

    if ( response.user.role === "USER") {
      setUserProducts(response.products);
    } else if ( response.user.role === "CREATOR") {
      setUserProducts(response.collection);
    }

  }
 

  console.log(user);
  console.log(pageUser);
  console.log(userProducts);

  useEffect(() => {
    mainVisit()
    return () => {
      
    }
  }, [])
 
  const Style = {
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0.1%, rgba(0, 0, 0, 1)), url(' + pageUser?.avatar + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    padding: '5px'
  };


  return (
    <>
        <div className="mainPageContainer" style={Style}>
        
            <div className="userFirstBanner backgroundHandler">
              <div className="userImgWrapper userAvatar flexHandler"><img src={pageUser?.avatar} alt="" className=" imgContainer" /></div>
                <div className="username flexHandler flexRow"><h1> {pageUser?.username}</h1>
                {isAuthenticated && loginUser.username == username ? (
                <NavLink to={"config/"+loginUser.username} className="editProfileIcon"> <FontAwesomeIcon icon={faUserEdit} className="collectionLikeButton" size="3x" /></NavLink>
              ) : (
                <></>
              )} </div>
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
  

              {pageUser.role === "CREATOR" ? userProducts?.map((item) => (
                <ProfileCreatorItem item={item}/>
              ))
            
              : userProducts?.map((item) => (
                <ProfileUserItem item={item}/>))}

    
          </div>
        </div>
    </>
  );
}

export default UserProfile;
