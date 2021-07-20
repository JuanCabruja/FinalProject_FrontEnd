import { useForm } from "../../Hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext"; 
import {useHistory} from "react-router-dom";
import { USER_URL } from "../../config/config";

import './Login.css';

//TODO: Arreglar el css GRID del register para que salga bien
 
export default function Register() {

    const {signIn, loginUser} = useAuthContext();

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

        const response = await fetch(USER_URL, options);
        const data = await response.json();
        
        if (response.status === 201) {
            // signIn(data.token, data.user);
            
            history.push("/login");
            alert("¡Usuario creado! Pruébalo haciendo Login");
    
        } else {
            // TODO: recuerda que te dejaste aquí esta frase y tendrás que hacer fetch al error.
            alert("¡Aquí debería estar mostrando el error!")
        }
    };
 

    return (
        <div className="logInSectionContainer">
            <div className="logInSideLeftContainer">

            </div>
            <div className="logInSideRightContainer">
                <div className="logInFormHandler">
                    <h1 className="h1Style">Let's make a new account:</h1>
                    <form onSubmit={handleSubmit} className="logInFormContainer ">
                        <span className="formText">*Email:</span>
                        <input onChange={handleChange} name="email" type="email" className="logInFormStyleEmail" placeholder="Introduce your email" />
                        <span className="formText">*Your name:</span>
                        <input onChange={handleChange} name="username" type="text" className="logInFormStylePassword" placeholder="Introduce your name" />
                        <span className="formText">*Password:</span>
                        <input onChange={handleChange} name="password" type="password" className="logInFormStylePassword" placeholder="**********" />
                        <input onChange={handleChange} type="submit" value="Create new account" className="logInBtn" />                    
                    </form>
                    <div className="otherLogInActions">
                    </div>
                </div>
            </div>
        </div>
    )
}