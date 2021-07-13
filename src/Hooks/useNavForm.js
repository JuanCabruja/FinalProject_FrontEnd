import { useState } from "react";
import { UTILITIES_URL } from "../config/config";

//TODO: Por ahora está entregándome las colecciones, pero debo finiquitar si va a enseñar las opciones. 

const useNavForm = (initialState) => {

    const [query, setQuery] = useState({})

    const handleInputChange = async e => {

        const form = {[e.target.name]: e.target.value};
        
        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(form),
          };
      
        const query = await fetch(UTILITIES_URL, options)
        const response = await query.json();

        setQuery(response)
        
    }
    
    return [query, handleInputChange,];
}

export {useNavForm};