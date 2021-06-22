// Import from React Router

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

// CSS

import './RouterNavBar.css';

// Logo Import
import Logo from "./Images/Saffo_LOGO.png";

// Pages import

import FrontPage from "./Pages/FrontPage";
import AboutUs from "./Pages/AboutUs";
import Error from "./Pages/Error";
import Market from "./Pages/MarketProducts/Market";
import Login from "./Pages/LoginAndRegisters/Login";
import NavBar from './Components/NavBar';


export default function RouterNavBar() {
  return (
    <>
      <BrowserRouter >
        <NavBar />
        <Switch >
          {/* Por ahora están solo las páginas principales. FRONT, AboutsUs, Market, Login */}
            <Route exact path='/'component={FrontPage}/>
            <Route path='/AboutUs'component={AboutUs}/>
            <Route path='/Market'component={Market}/>
            <Route path='/Login'component={Login}/> 
            <Route component={Error} />
        </Switch>
      </BrowserRouter>  
    </>
  );
}


