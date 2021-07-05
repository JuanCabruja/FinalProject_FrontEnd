import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { BUYSELL_URL, COLLECTION_URL } from '../../config/config';
import { useAuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

export default function CollectionDetails() {

    // TODO: Ya está implementado el Fetch que me da la colección, ahora tengo que hacer el botón para realizar la compra
    // Y hacer el front de esta página

    // Importación de Parámetros 
    let { collectionId } = useParams();
    const { loginUser, isAuthenticated, getToken, getAuthHeaders } = useAuthContext();

     // Fetch Básico para el funcionamiento de la Página 
    const [collection, setCollection] = useState({});

    const CollectionInfo = async () => {

        const query = await fetch(COLLECTION_URL+collectionId);
        const response = await query.json();
        setCollection(response.collection[0])
       
    }

    useEffect(() => {
        CollectionInfo();
       
        return () => {}
    }, [])


  
    console.log(collection);
    console.log(loginUser);

    const form = {parentCollection: collection._id, 
                  price: collection.price, 
                  userBuyer: loginUser._id, 
                  userSeller: collection.author }

    const HandleBuy = async e => {
        e.preventDefault()
        
        e.preventDefault();
        const options = {
            method: "POST",
            headers: {"Content-type": "application/json", "Authorization": `Bearer ${getToken()}`},
           
            body: JSON.stringify(form),
           
        }

        const response = await fetch(BUYSELL_URL+`collections/${collectionId}`, options); 
        const data = await response.json();
        
        if (response.status === 200) {
            console.log(data);
        } else if (response.status === 400 ) {
            alert("No hay productos los vendimos todos")
        }

    }

    return (
        <div>
            <h1>{collection.name}</h1>
            <h2>supply: {collection.supply}</h2>
            <h2>price: {collection.price}€</h2>

            <form action="" onSubmit={HandleBuy}>
                <button value="Buy now" type="submit">Buy Now</button>
            </form>

        </div>
    )
}
