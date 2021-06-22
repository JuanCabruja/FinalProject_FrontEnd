import { useForm } from "../../Hooks/useForm";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext"; 
import {useHistory} from "react-router-dom";
import { LOGIN_URL } from "../../config/config";
 
export default function Login() {

    const {logIn} = useAuthContext();

    const history = useHistory();
 
    const formInitialState = {email: "", password:""};
    const [form, handleChange] = useForm(formInitialState);
 
    const handleSubmit = async e => {
        e.preventDefault();

        // TODO: capturar credenciales y hacer POST al server
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
 

    return (
        <div className="d-flex justify-content-center pt-5">
            <form onSubmit={handleSubmit} className="form-group w-50 bg-dark p-5 rounded">
                <input onChange={handleChange} name="email" type="email" className="form-control mb-3" placeholder="Introduce tu email" />
                <input onChange={handleChange} name="password" type="password" className="form-control mb-3" placeholder="**********" />
                <input onChange={handleChange} type="submit" value="Iniciar sesión" className="btn btn-success" />
            </form>
        </div>
    )
}
