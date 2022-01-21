import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';
;


export const useFetchGifs = ( category ) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //Hace que se ejecute la funcion cuando el componente es renderizado por primera vez
    useEffect(()=>{
        getGifs(category)
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            });
    });

    return state; // {data, loading}

};
