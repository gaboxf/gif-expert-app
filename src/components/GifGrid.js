//Coleccion de todos los elementos 
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useEffect, useState } from 'react';
//import { getGifs } from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs();
    console.log(data);
    console.log(loading);
    /* const [images, setImages] = useState([]);
    
    //Hace que se ejecute la funcion cuando el componente es renderizado por primera vez
    useEffect(() => {
        getGifs(category)
            .then(setImages)
            .catch(console.log)
    }, [category]); */



    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Cargando...' : 'Data cargada'}
            {/* <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> */}
        </>
    );
};
