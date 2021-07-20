import { useForm } from "../../Hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext"; 
import { useHistory } from "react-router-dom";
import { LOGIN_URL } from "../../config/config";
import { NavLink } from 'react-router-dom';

import './Login.css';
 
export default function Login() {

    const { signIn } = useAuthContext();
    const history = useHistory();
 
    const formInitialState = {email: "", password:""};
    const [form, handleChange] = useForm(formInitialState);
    
    //TODO: ¿Podría gestionar con esto la redirección de la modificación del formulario? 
    
    const handleSubmit = async e => {
        
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options); 
        const data = await response.json();
        
        if (response.status === 200) {
            
            signIn(data.token, data.user);
            history.push("/"+data.user.username);

        } else {
            alert("Credenciales incorrectas")
        }


    };
 
    return (
        <div className="logInSectionContainer">
            <div className="logInSideLeftContainer">

            </div>
            <div className="logInSideRightContainer">
                <div className="logInFormHandler">
                    <h1 className="h1Style">Bienvenido.</h1>
                    <form onSubmit={handleSubmit} className="logInFormContainer ">
                        <input onChange={handleChange} name="email" type="email" className="logInFormStyleEmail" placeholder="Introduce tu email"  />
                        <input onChange={handleChange} name="password" type="password" className="logInFormStylePassword" placeholder="**********" />
                        <input onChange={handleChange} type="submit" value="Log In" className="logInBtn" />                    
                    </form>

                    <div className="otherLogInActions">
                    <NavLink to="/passwordForgotten" className="subFormLink" activeClassName="register">Forgotten password?</NavLink>
                    <NavLink to="/registration" className="subFormLink" activeClassName="register">Register</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}
