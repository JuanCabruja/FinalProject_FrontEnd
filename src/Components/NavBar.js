import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { Button, Menu, MenuItem } from "@material-ui/core";

import "./NavBar.css";

import { SvgIcon } from "@material-ui/core";

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() {
  const { isAuthenticated, loginUser, signOut, isCreator } = useAuthContext();
  const history = useHistory();

  const handleSignOut = () => {
    signOut();
    history.push("/");
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //TODO: Tengo aquí pendiente que gestionar el hecho de que la página al hacer una redirección me recibe como que fuese un usuario y me envía a una página de usuario vacía
  //TODO: Preguntarle a Jesús como gestiono el refresh al momento de entrar a la página

  return (
    <nav className="mainNav ">
  
        <div className="navLogo">
          <NavLink to="/" className="saffoLogo" activeClassName="marker">
            {" "}
            <h1 className="marker">SAFFO</h1>{" "}
          </NavLink>
        </div>
        <form className="navFormSearch" onSubmit="">
          <input
            type="search"
            id="form1"
            className="navSearchInput navSearchInputStyle"
            placeholder="What are you looking for?"
            onChange=""

          />
        </form>


      <div className="navButtonContainer">
          <NavLink to="/market" className="marker" activeClassName="active">
            Marketplace
          </NavLink>
  
          {isAuthenticated ? (
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
