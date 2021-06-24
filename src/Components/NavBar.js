import React from 'react'
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
    return (

        <nav className="mainNav ">
            
            <div className="navContent">

                <div className="navLogo" >
                    <NavLink to='/' className="" activeClassName="logo"> <h1 className="">SAFFO</h1> </NavLink>
                </div>

                <form className="navFormSearch" onSubmit="">
                    <input type="search" id="form1" className="navSearchInput navSearchInputStyle" placeholder="Busca tu prenda ideal ;)" onChange=""  />
                    <label className="form-label" for="form1" type='submit'> </label>
                </form>

                <NavLink to='/login' className='' activeClassName='active'>Marketplace</NavLink>

                <NavLink to='/login' className='' activeClassName='active'>Login</NavLink>
                
            </div>

            {/* <table className="navLinks"> 
                <td className="navLinks">
                    <li>  <NavLink to='/AboutUs' className='' activeClassName=''>About Us</NavLink> </li>
                    <li>  <NavLink to='/Ejercicio1' className='text-decoration-none  font-weight-bold' activeClassName='active'>Test 1</NavLink> </li>
                    <li>  <NavLink to='/Ejercicio1' className='text-decoration-none  font-weight-bold' activeClassName='active'>Test 2</NavLink> </li>
                    <li>  <NavLink to='/Ejercicio1' className='text-decoration-none  font-weight-bold' activeClassName='active'>Test 3</NavLink> </li>
                </td>
            </table> */}
         </nav>

    )
}
