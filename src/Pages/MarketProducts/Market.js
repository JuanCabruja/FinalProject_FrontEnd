
import { COLLECTION_URL } from "../../config/config";
import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import MarketCard from "../../Components/MarketCard";

function Market() {

    const [response, setResponse] = useState([])

    const options = {
            method: "GET",
            headers: {"Content-type": "application/json"},
             }

    useFetch(COLLECTION_URL, setResponse);
            
    const collections = response.collections

    return (
      <>

      <div className="flex">{collections?.map(collection => 
        <MarketCard images={collection?.images} name={collection?.name} author={collection?.author.username} collection={collection} id={collection._id}/>)}
      </div>

      </>
    );
  }
  
  export default Market;