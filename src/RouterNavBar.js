// Import from React Router

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

// Logo Import
import Logo from "./Images/Saffo_LOGO.png";

// Pages import

import FrontPage from "./Pages/FrontPage";
import AboutUs from "./Pages/AboutUs";
import Error from "./Pages/Error";
import Market from "./Pages/MarketProducts/Market";
import Login from "./Pages/LoginAndRegisters/Login";


export default function NavBar() {
  return (
    <>
      <BrowserRouter >

        <nav className="w-100 p-3 bg-white text-dark border border-dark row " >

            <div className="col-3 d-flex justify-content-center align-items-center" >

            <img src={Logo} alt="" className=''/>

            </div>

            <form className="form-outline my-1 col-6  d-flex justify-content-center align-items-center" onSubmit="">

                <input type="search" id="form1" className="form-control align-self-center" placeholder="Busca tu prenda ideal ;)" onChange=""  />
                <label className="form-label" for="form1" type='submit'> </label>

            </form>

           <NavLink to='/login' className='text-decoration-none font-weight-bold col-3 d-flex justify-content-center align-items-center' activeClassName='active'>Login</NavLink>

        </nav>



          {/* <nav className='d-flex justify-content-around bg-dark p-2'>

              
              <NavLink to='/Ejercicio1' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 1</NavLink>
              <NavLink to='/Ejercicio2' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 2</NavLink>
              <NavLink to='/Ejercicio3' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 3</NavLink>
              <NavLink to='/Ejercicio4' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 4</NavLink>
              
          </nav> */}



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


