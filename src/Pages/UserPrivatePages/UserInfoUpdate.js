import { useForm } from "../../Hooks/useForm";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext"; 
import {useHistory} from "react-router-dom";
import { COLLECTION_URL } from "../../config/config";
import { NavLink } from 'react-router-dom';
import { log } from "loglevel";
import axios from "axios";
import { useState } from "react";

export default function CollectionUpload() {

    //TODO: Falta por revisar el tema de la asociación de Categorías, pero en gran parte el formulario está hecho. 
    // Esto tiene pinta de que lo utilizaré como un componente flotante, o algo así. 

    const {signIn, loginUser, getAuthHeaders} = useAuthContext();
    const history = useHistory();
 
    const formInitialState = {collectionName: "", collectionSupply: "", collectionPrice: "", collectionDescription: "", collectionImages: [{}], author: loginUser._id};
    const [form, handleInputChange] = useForm(formInitialState);

    const [inputValue, setInputValue] = useState([])

    const handleImageChange = e => {
   
        const inputName = e.target.name;
        const inputValue = e.target.files;
        setInputValue(inputValue)

    };

    const handleSubmit = async e => {
        e.preventDefault();
        let formData = new FormData();
        for (let i = 0, f; f = inputValue[i]; i++) { formData.append('collectionImages', inputValue[i])}
        formData.append('collectionName', form.collectionName);
        formData.append('collectionSupply', form.collectionSupply);
        formData.append('collectionPrice', form.collectionPrice);
        formData.append('collectionDescription', form.collectionDescription);
        formData.append('author', loginUser._id);
        formData.append('role', loginUser.role);

        const option = { headers: getAuthHeaders() }

        axios.post(COLLECTION_URL, formData, option).then(res => { 
            history.push('/'+loginUser.username);
        })
    };
    
    return (
        <div>
            <div className="">
                <form onSubmit={handleSubmit} className="logInFormContainer ">
                    <input onChange={handleInputChange} name="username" type="text" className="logInFormStyleEmail" placeholder="collectionName"  />
                    <input onChange={handleInputChange} name="email" type="email" className="logInFormStylePassword" placeholder="collectionSupply" />
                    <input onChange={handleInputChange} name="description" type="text" className="logInFormStylePassword" placeholder="collectionPrice" />  
                    <input onChange={handleInputChange} type="submit" value="Push New Collection" className="logInBtn" />            
                </form>
            </div> 
        </div>
    )
}