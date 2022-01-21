import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //Sirve para manejar el refesh de pagina que hacen por default los formularios
        if (inputValue.trim().length > 2) {
            setCategory(cats => [...cats, inputValue]); //Añade el nuevo input ingresado
            setInputValue(''); //Setea el input a vacio cuando se hace el submit
        }
        
        //console.log('Submit hecho');
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

//Es obligatorio mandar el setCategories del otro componente
AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
