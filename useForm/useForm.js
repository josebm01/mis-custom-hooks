//* CustomHook para manejar la información de los formularios

import { useState } from 'react';

export const useForm = ( initialState = {} ) => {

     const [values, setValues] = useState(initialState);

     const reset = () => {
         setValues(initialState);
     }

     //* Desestructurando el evento e y obteniendo la propiedad target para guardar los valores en el set
     const handleInputChange = ({ target }) => {
        // console.log(e.target);

        setValues({
            ...values, //* Manteniendo los valores que no cambian
            [ target.name ]: target.value
        })
    }


    return [values, handleInputChange, reset];


}
