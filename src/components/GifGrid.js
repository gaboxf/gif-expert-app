//Coleccion de todos los elementos 
import React from 'react';

export const GifGrid = ({category}) => {
  
  const getGifs = async() => {
      const apiKey = 'qKbTiiVJ7JNUr3ptSRRl8ocadgJEQtoS';
      const query = 'Boku no hero';
      const limit = '10';
      const url = `https://api.giphy.com/v1/gifs/search?q=${query.replace(/\s+/g, '+')}&limit=${limit}&api_key=${apiKey}`;
      const resp = await fetch(url);
      const {data} = await resp.json();

      const gifs = data.map( img => {
          return {
              id: img.id,
              title: img.title,
              url: img.images?.downsized_medium.url
          }
      })
      console.log(gifs);
      //console.log(data);

  }

  getGifs();
  
    return (
      <>
        <h3>{category}</h3>
      </>
  );
};
