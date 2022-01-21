import React, { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('second');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //Sirve para manejar el refesh de pagina que hacen por default los formularios
        console.log('Submit hecho');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};
