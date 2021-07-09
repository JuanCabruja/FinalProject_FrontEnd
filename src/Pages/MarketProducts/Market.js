
import { COLLECTION_URL } from "../../config/config";
import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import CollectionCard from "../../Components/CollectionCard";

import './Market.css'

function Market() {

    const [response, setResponse] = useState([])

    const options = { method: "GET", headers: {"Content-type": "application/json"} }

    useFetch(COLLECTION_URL, setResponse);
            
    const collections = response.collection
    
    
    return (
      <>
        <div className="marketContainer">
          <div className="articleContainer ">
          
            {collections?.map(item => 
              <CollectionCard item={item}/>)}

          </div>
        </div>
      </>
    );
  }
  
  export default Market;