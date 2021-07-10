import { useForm } from "../../Hooks/useForm";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext"; 
import {useHistory} from "react-router-dom";
import { COLLECTION_URL } from "../../config/config";
import { NavLink } from 'react-router-dom';
import { log } from "loglevel";
import axios from "axios";
import { useState, useEffect } from "react";
import img from '../../imgBank/modaymoda.jpeg'
import { CATEGORY_URL } from "../../config/config";
import Select from "react-select";



import './collectionUpload.css'

export default function CollectionUpload() {

    //TODO: Falta por revisar el tema de la asociación de Categorías, pero en gran parte el formulario está hecho. 
    // Esto tiene pinta de que lo utilizaré como un componente flotante, o algo así. 

    const {signIn, loginUser, getAuthHeaders} = useAuthContext();
    const history = useHistory();
 
    const formInitialState = {collectionName: "", collectionSupply: "", collectionPrice: "", collectionImages: [{}], description: "", author: loginUser._id};
    const [form, handleInputChange] = useForm(formInitialState);

    const [inputValue, setInputValue] = useState([])

    const handleImageChange = e => {
   
        const inputName = e.target.name;
        const inputValue = e.target.files;
        setInputValue(inputValue)

    };

    //TODO: No sé por qué no me renderiza el SELECT usaré este mismo código en el filter del Market
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const query = await fetch(CATEGORY_URL);
        const response = await query.json()
        
        let finalCategory = []

        response.categories.forEach(category => {
          finalCategory.push({value: category._id, label: category.name })
        }) 
        setCategories(finalCategory)
    }

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
        formData.append('description', form.description)
        for (let i = 0, f; f = sendCategories[i]; i++) { formData.append('categories', sendCategories[i].value)}

        const option = { headers: getAuthHeaders() }

        axios.post(COLLECTION_URL, formData, option).then(res => { 
            history.push('/'+loginUser.username);
        })
    };

    const [sendCategories, setSendCategories] = useState([]) 

    function onChange(value) {
        setSendCategories(value)
      }
    
    console.log("soy sendCategories: ",sendCategories);
    useEffect(() => {
        getCategories()
        return () => {
        }
    }, [])

    console.log(categories);
    
    return (
        
            <div className="uploadCollectionController">
                <div className="uploadCollectionController2 backgroundHandler">
    
                        <img src={img} alt="" className="waiterImg"/>

                        
    
                        <form onSubmit={handleSubmit} className="collectionFormContainer">
    
                            <div className="CollectionDivName">
                                <label className="formInputName">Nombre de la colección: </label>
                                <input onChange={handleInputChange} name="collectionName" type="text" className="collectionUploadField" placeholder="collectionName"  />
                            </div>
    
                            <div className="CollectionDivName">
                                <label className="formInputName">Cantidad total de productos: </label>
                                <input onChange={handleInputChange} name="collectionSupply" type="text" className="collectionUploadField" placeholder="collectionSupply" />
                            </div>
    
                            <div className="CollectionDivName">
                                <label className="formInputName">Precio inicial de la colección: </label>
                                <input onChange={handleInputChange} name="collectionPrice" type="number" className="collectionUploadField" placeholder="collectionPrice" />
                                <p>   € </p>
                            </div>  

                            <label className="formInputName">Descripción de la colección: </label>
                            <textarea name="description" onChange={handleInputChange} className="collectionUploadFieldText" cols="50" rows="15"></textarea>

                            <Select
                                defaultValue={[]}
                                isMulti
                                name="colors"
                                options={categories}
                                className="upload-multi-select"
                                classNamePrefix="select"
                                onChange={onChange}
                            />
                           

                            <input onInput={handleImageChange}   type="file" name="collectionImages" className="filesImgInput" multiple/>
                            <input onChange={handleInputChange} type="submit" value="Push New Collection" className="uploadCollectionBtn" />
    
                        </form>
                </div>
            </div> 
   
    )
}
