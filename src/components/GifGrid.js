//Coleccion de todos los elementos 
import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    //Hace que se ejecute la funcion cuando el componente es renderizado por primera vez
    useEffect(() => {
        getGifs();
    }, []);


    const getGifs = async () => {
        const apiKey = 'qKbTiiVJ7JNUr3ptSRRl8ocadgJEQtoS';
        const query = 'Boku no hero';
        const limit = '10';
        const url = `https://api.giphy.com/v1/gifs/search?q=${query.replace(/\s+/g, '+')}&limit=${limit}&api_key=${apiKey}`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs);
    }

    //getGifs();

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ol>
        </>
    );
};
