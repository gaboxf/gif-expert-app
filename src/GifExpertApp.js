import React, {useState} from 'react';




const GifExpertApp = () =>{
    
    //const categories = ['One Punch', 'Dragon Ball', 'Boku no Hero'];

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Boku no Hero']);

    const handleAdd = () =>{
        //categories.push('HunterXHunter'); No se debe mutar el estado de los objetos
        //setCategories([...categories, 'HunterXHunter']);
        setCategories(cats => [...cats, 'HunterXHunter']);
        //Callback cats, las categorias en estado anterior sumado al nuevo estado que quiero agregar, regresando el nuevo estado.
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                        //Hay que especificar un key, para que cuando react renga que renderizar sepa que cosas debe cargar especificamente.
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
