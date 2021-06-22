import React from 'react'
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
    return (

        <nav className=" bg-white text-dark border border-dark d-flex row " >
            <div className="row p-3 w-100 col-12">
                <div className="col-1 d-flex align-items-center" >
                {/* <img src={Logo} alt="" className=''/> */}
                    <NavLink to='/' className="text-decoration-none "> <h1 className="LogoMomentum">SAFFO</h1> </NavLink>
                </div>
                <form className="form-outline  col-10  d-flex justify-content-center align-items-center" onSubmit="">
                    <input type="search" id="form1" className="form-control align-self-center fondoPrueba" placeholder="Busca tu prenda ideal ;)" onChange=""  />
                    <label className="form-label" for="form1" type='submit'> </label>
                </form>
                <NavLink to='/login' className='text-decoration-none font-weight-bold col-1 d-flex justify-content-center align-items-center' activeClassName='active'>Login</NavLink>
            </div>
            <table> 
                <td className="d-flex justify-content-around">
                    <li>  <NavLink to='/AboutUs' className='text-decoration-none  font-weight-bold' activeClassName='active'>About Us</NavLink> </li>
                    <li>  <NavLink to='/Ejercicio1' className='text-decoration-none  font-weight-bold' activeClassName='active'>Ejercicio 1</NavLink> </li>
                    <li>  <NavLink to='/Ejercicio1' className='text-decoration-none  font-weight-bold' activeClassName='active'>Ejercicio 1</NavLink> </li>
                    <li>  <NavLink to='/Ejercicio1' className='text-decoration-none  font-weight-bold' activeClassName='active'>Ejercicio 1</NavLink> </li>

                </td>
            </table>
         </nav>

    )
}
