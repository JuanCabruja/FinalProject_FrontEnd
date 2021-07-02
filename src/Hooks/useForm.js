import { useState } from "react";

const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);

    const handleInputChange = e => {


        const inputName = e.target.name;
        const inputValue = e.target.value;

        setForm(previousState => {
            return {...previousState, [inputName]: inputValue}
        });
    }

    return [form, handleInputChange];
}

export {useForm};