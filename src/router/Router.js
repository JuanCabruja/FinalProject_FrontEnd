// Import from React Router

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

// CSS

import './Router';

// Logo Import
import Logo from "../Images/Saffo_LOGO.png";

// Pages import

import FrontPage from "../Pages/FrontPage";
import AboutUs from "../Pages/AboutUs";
import Error from "../Pages/Error";
import Market from "../Pages/MarketProducts/Market";
import Login from "../Pages/LoginAndRegisters/Login";
import NavBar from "../Components/NavBar";
import Register from '../Pages/LoginAndRegisters/Register';
import passwordForgotten from '../Pages/LoginAndRegisters/PasswordForgotten';
import UserProfile from '../Pages/UserPrivatePages/UserProfile';
import PrivateRoute from '../controllers/PrivateRoute';
import LoginRedirect from '../controllers/LoginRedirect';
import CollectionUpload from '../Pages/UserPrivatePages/CollectionUpload';

export default function Router() {
  return (
    <>
      <BrowserRouter >
        <NavBar />
        <Switch >
            <Route exact path='/'component={FrontPage}/>
            <Route path='/AboutUs'component={AboutUs}/>
            <Route path='/Market'component={Market}/>
            <LoginRedirect path='/Login'><Login/></LoginRedirect>
            <Route path='/registration' component={Register} />
            <Route path='/passwordForgotten'component={passwordForgotten} />
            <PrivateRoute path='/config'>   </PrivateRoute>  
            <PrivateRoute path='/:username/upload'><CollectionUpload /></PrivateRoute>
            <Route path='/:username'><UserProfile /></Route>       
            <Route component={Error} /> 

        </Switch>
      </BrowserRouter>  
    </>
  );
}


