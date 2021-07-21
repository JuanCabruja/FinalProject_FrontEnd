import { useForm } from "../../Hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext"; 
import {useHistory} from "react-router-dom";
import { COLLECTION_URL } from "../../config/config";

import axios from "axios";
import { useState, useEffect } from "react";
import img from '../../imgBank/modaymoda.jpeg'
import { CATEGORY_URL } from "../../config/config";
import Select from "react-select";

import './collectionUpload.css'

//TODO: ASIGNA UNA PROPIEDAD ALT A LAS IMAGENES

export default function CollectionUpload() {


    const {loginUser, getAuthHeaders} = useAuthContext();
    const history = useHistory();
 
    const formInitialState = {collectionName: "", collectionSupply: "", collectionPrice: "", collectionImages: [{}], description: "", author: loginUser._id};
    const [form, handleInputChange] = useForm(formInitialState);

    const [inputValue, setInputValue] = useState([])

    const handleImageChange = e => {
        const inputValue = e.target.files;
        setInputValue(inputValue)

    };

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
        for (let i = 0 ; i < inputValue.length; i++) { formData.append('collectionImages', inputValue[i])}
        formData.append('collectionName', form.collectionName);
        formData.append('collectionSupply', form.collectionSupply);
        formData.append('collectionPrice', form.collectionPrice);
        formData.append('collectionDescription', form.collectionDescription);
        formData.append('author', loginUser._id);
        formData.append('role', loginUser.role);
        formData.append('description', form.description)
        for (let i = 0 ; i < sendCategories.length; i++) { formData.append('categories', sendCategories[i].value)}

        const option = { headers: getAuthHeaders() }

        axios.post(COLLECTION_URL, formData, option).then(res => { 
            history.push('/'+loginUser.username);
            alert("Colección subida con éxito")
        })
    };

    const [sendCategories, setSendCategories] = useState([]) 

    function onChange(value) {
        setSendCategories(value)
      }

    useEffect(() => {
        getCategories()
        return () => {
        }
    }, [])

    
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
