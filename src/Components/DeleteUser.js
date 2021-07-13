import React from 'react'
import { useAuthContext } from '../contexts/AuthContext';
import { USER_URL } from '../config/config';
import { useHistory, useParams } from 'react-router';

export default function DeleteUser({loginUser, token}) {

    const {getAuthHeaders} = useAuthContext();
    const history = useHistory();
 
    let {username} = useParams();

    const handleSubmit = async e => {
        e.preventDefault();

        e.preventDefault();
        const options = {
            method: "DELETE",
            headers: getAuthHeaders(),
            body: JSON.stringify(loginUser)
        }

        const response = await fetch(USER_URL+username+"/delete", options);
        const data = await response.json();
        
        if (response.status === 200) {
            history.push("/");
            alert("Usuario Eliminado")
           
        } else {
            alert("Credenciales incorrectas")
            console.log(data);
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="submit" value="Borrar usuario" />
            </form>    
        </div>
    )
}
