import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';


import './NavBar.css';

export default function NavBar() {

   const { isAuthenticated, loginUser, signOut, isCreator } = useAuthContext();
   const history = useHistory();

   const handleSignOut = () => {
        signOut();
        history.push("/");
   }

    return (

        <nav className="mainNav ">
            
            <div className="navContent">

                <div className="navLogo" >
                    <NavLink to='/' className="marker" activeClassName="marker"> <h1 className="marker">SAFFO</h1> </NavLink>
                </div>

                <form className="navFormSearch" onSubmit="">
                    <input type="search" id="form1" className="navSearchInput navSearchInputStyle" placeholder="What are you looking for?" onChange=""  />
                    <label className="form-label" for="form1" type='submit'> </label>
                </form>

                <NavLink to='/market' className='marker' activeClassName='active'>Marketplace</NavLink>

                { isAuthenticated ? <div><NavLink to={'/'+loginUser?.username} className='marker' activeClassName='active'>User Dashboard</NavLink> </div>
                                  : <NavLink to='/login' className='marker' activeClassName='active'>Login</NavLink>  }   
                                        
                { isAuthenticated && isCreator() ? <NavLink to={'/'+loginUser?.username+'/upload'}>New Collection</NavLink>
                                                 :   <></> }
                                    
                 { isAuthenticated  ? <div><input type="submit" onClick={handleSignOut} value="signout"></input></div>
                                    : <></> }
  


            </div>

         </nav>
    )
}
