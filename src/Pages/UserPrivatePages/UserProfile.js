import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { USER_URL } from "../../config/config";
import { useAuthContext } from "../../contexts/AuthContext";
import "./UserProfile.css";
import { NavLink } from "react-router-dom";
import ProfileCreatorItem from "../../Components/ProfileCreatorItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import ProfileUserItem from "../../Components/ProfileUserItem";


function UserProfile() {
  const { isAuthenticated, loginUser } = useAuthContext();

  const history = useHistory();

  // Fetch sobre información para la página de usuario.
  let { username } = useParams();
  // const [user, setUser] = useState({});
  const [pageUser, setPageUser] = useState({});
  const [userProducts, setUserProducts] = useState([]);

  const mainVisit = async (e) => {
    const query = await fetch(USER_URL + username);
    const response = await query.json();

    const handler = async (response) => {
      if (response.ok === false) {
        return history.push("/"); // Por el momento no nos está llevando a una página de error, que de hecho no he hecho.
      } else if (response.user.role === "USER") {
        return (
          setPageUser(response.user),
          setUserProducts(response.products)
        );
      } else if (response.user.role === "CREATOR") {
        return (
          setPageUser(response.user),
          setUserProducts(response.collection)
        );
      }
    };

    await handler(response);
  };


  useEffect(() => {
    mainVisit();
    return () => {};
       // eslint-disable-next-line
  }, []);

  const Style = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0.1%, rgba(0, 0, 0, 1)), url(" +
      pageUser?.avatar +
      ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
    padding: "5px",
  };

  return (
    <>
      <div className="mainPageContainer" style={Style}>
        <div className="userFirstBanner backgroundHandler">
          <div className="userImgWrapper userAvatar flexHandler">
            <img src={pageUser?.avatar} alt="" className=" imgContainer" />
          </div>
          <div className="username flexHandler flexRow">
            <h1> {pageUser?.username}</h1>
            {isAuthenticated && loginUser.username === username ? (
              <NavLink
                to={"config/" + loginUser.username}
                className="editProfileIcon"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faUserEdit}
                  className="collectionLikeButton"
                  size="3x"
                />
              </NavLink>
            ) : (
              <></>
            )}{" "}
          </div>
          <div className="punctuation flexHandler">
            {" "}
            <p>500</p>
            <p>punctuation</p>
          </div>
          <div className="likes flexHandler">
            <p>500</p>
            <p>likes</p>
          </div>
          <div className="followers flexHandler">
            {" "}
            <p>500</p>
            <p>followers</p>
          </div>
        </div>

        <div className="items">
          <h1>BIO:</h1>
        </div>
        <div className="userBio flexHandler backgroundHandler">
          <p>{pageUser?.description}</p>
        </div>

        <div className="items">
          {pageUser?.role === "CREATOR" ? (
            <h1>Colecciones:</h1>
          ) : (
            <h1>Prendas:</h1>
          )}
        </div>
        <div className="secondUserBannercontainer flexHandler backgroundHandler">
          {pageUser === {} ? (
            <></>
          ) : pageUser.role === "CREATOR" ? (
            userProducts?.map((item) => (
              <ProfileCreatorItem item={item} key={item._id} />
            ))
          ) : (
            userProducts.map((item) => (
              <ProfileUserItem item={item} key={item._id} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
