//Coleccion de todos los elementos 
import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    //Hace que se ejecute la funcion cuando el componente es renderizado por primera vez
    useEffect(() => {
        getGifs(category)
            .then(setImages)
            .catch(console.log)
    }, [category]);



    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    );
};
