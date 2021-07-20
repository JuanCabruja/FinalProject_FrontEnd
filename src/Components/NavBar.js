import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useNavForm } from "../Hooks/useNavForm";
import "./NavBar.css";
// import { UTILITIES_URL } from "../config/config";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() {


  // Imports de Contexto
  const { isAuthenticated, loginUser, signOut, isCreator } = useAuthContext();
  const history = useHistory();

  // Función que desloguea al usuario
  const handleSignOut = () => {
    signOut();
    history.push("/");
  };

  // Gestión de Botón una vez Logueado
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [query, HandleInputchange] = useNavForm()

  console.log(query);

  return (
    <nav className="mainNav ">
  
        <div className="navLogo">
          <NavLink to="/" className="saffoLogo" activeClassName="marker">
            {" "}
            <h1 className="marker">SAFFO</h1>{" "}
          </NavLink>
        </div>

        <form className="navFormSearch" > {/* onSubmit={}*/}

          <input
            type="search"
            id="form1"
            className="navSearchInput navSearchInputStyle"
            placeholder="What are you looking for?"
            onChange={HandleInputchange}
            name="searchForm"
          />
          
        </form>


      <div className="navButtonContainer">
          <NavLink to="/market" className="marker" activeClassName="active">
            Marketplace
          </NavLink>
  
          {(isAuthenticated ) ? (
            <div>
              <Button className="button"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                size="small"
              >
                <FontAwesomeIcon icon={faBars} />
              </Button>
  
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  <NavLink
                    to={"/" + loginUser?.username}
                    className="marker"
                    activeClassName="active"
                  >
                    My Profile
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to={"/config/" + loginUser.username}>
                    My Account
                  </NavLink>
                </MenuItem>
                {isAuthenticated && isCreator() ? (
                  <MenuItem onClick={handleClose}>
                    <NavLink to={"/" + loginUser?.username + "/upload"}>
                      New Collection
                    </NavLink>
                  </MenuItem>
                ) : (
                  <></>
                )}
                <MenuItem onClick={(handleClose, handleSignOut)}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <NavLink to="/login" className="marker" activeClassName="active">
              Login
            </NavLink>
          )}
        </div>

    </nav>
  );
}
