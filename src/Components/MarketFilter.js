import React from 'react';
import { useForm } from '../Hooks/useForm';

import './MarketFilter.css'

export default function MarketFilter() {

    const formInitialState = {};
    const [form, handleInputChange] = useForm(formInitialState);
    return (
        <div className="marketFilterContainer">
            
            <form action="formContainer">
                
                <p>Hola aquí va a ir el formulario</p>

            </form>
            
        </div>
    )
}
