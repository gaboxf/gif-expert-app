import { useState } from "react";

export const useFetchGifs = () => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        
    })
    return state; // {data, loading}

};
