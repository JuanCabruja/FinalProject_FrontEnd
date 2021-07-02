import { useForm } from "../../Hooks/useForm";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext"; 
import {useHistory} from "react-router-dom";
import { LOGIN_URL } from "../../config/config";
import { NavLink } from 'react-router-dom';

import './Login.css';
 
export default function PasswordForgotten() {

    const { logIn } = useAuthContext();

    const history = useHistory();
 
    const formInitialState = {email: "", password:""};
    const [form, handleChange] = useForm(formInitialState);
 
    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        console.log(form);

        const response = await fetch(LOGIN_URL, options); //  Se puede utilizar fetch().then().then()
        const data = await response.json();

        console.log(data);
        
        if (response.status === 200) {
            logIn(data.token, data.user);
            history.push("/dashboard")
        } else {
            alert("Credenciales incorrectas")
        }
    };
    
    // TODO: Una vez hecho el recovery de la contraseña, habrá que dar un mensaje de succes

    return (
        <div className="logInSectionContainer">
            <div className="logInSideLeftContainer">

            </div>
            <div className="logInSideRightContainer">
                <div className="logInFormHandler">
                    <h1 className="h1Style">Have your forgot your password?</h1>
                    <span className="formText">Introduce your email and we'll send you a recovery password:</span>
                    <form onSubmit={handleSubmit} className="logInFormContainer ">
                        <span className="formText">*Email:</span>
                        <input onChange={handleChange} name="email" type="email" className="logInFormStyleEmail" placeholder="Introduce tu email" />
                        <input onChange={handleChange} type="submit" value="submit" className="logInBtn" />                    
                    </form>
                    <div className="otherLogInActions">

                    </div>

                </div>
            </div>
        </div>
    )
}