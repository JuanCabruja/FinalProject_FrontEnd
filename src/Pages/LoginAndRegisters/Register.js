import { useForm } from "../../Hooks/useForm";
// import { useAuthContext } from "../../contexts/AuthContext"; 
import {useHistory} from "react-router-dom";
import { USER_URL } from "../../config/config";

import './Login.css';
import './Register.css';

export default function Register() {

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
        console.log(data);
        if (response.status === 201) {
            // signIn(data.token, data.user);
            
            history.push("/login");
            alert("¡Usuario creado! Pruébalo haciendo Login");
    
        } else {
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
                    <form onSubmit={handleSubmit} className="registerFormContainer ">
                        <span className="registerFormText">*Email:</span>
                        <input onChange={handleChange} name="email" type="email" className="logInFormStyleEmail formPadder" placeholder="Introduce your email" />
                        <span className="registerFormText">*Your name:</span>
                        <input onChange={handleChange} name="username" type="text" className="logInFormStylePassword formPadder" placeholder="Introduce your name" />
                        <span className="registerFormText">*Password:</span>
                        <input onChange={handleChange} name="password" type="password" className="logInFormStylePassword formPadder" placeholder="**********" />
                        <input onChange={handleChange} type="submit" value="Create new account" className="logInBtn" />                    
                    </form>
                    <div className="otherLogInActions">
                    </div>
                </div>
            </div>
        </div>
    )
}