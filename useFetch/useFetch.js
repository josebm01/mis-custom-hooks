import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({ data: null, loading: true, error: null});

    //* En true cuando se renderiza por primera vez
    const isMounted = useRef(true);

    //* Evitando que se genere un error al evitar el renderizado cuando se carga la información del fetch
    useEffect(() => {
    
        //* Al desmontar cuando termina el efecto
      return () => {
        isMounted.current = false; //* Cambiando el valor de la variable mediante la referencia de este para no renderizar de nuevo
      }
    }, []);



    useEffect(() => {

        setState({ data: null, loading: true, error: null});
        
        fetch(url)
            .then( res => res.json())
            .then( data => {

                //* Comprobación con el setTimeOut para interrumpir la renderización y comprobar que no ocurra el error con el else
                // setTimeout(() => {
                //* Validando que isMount esté en true, se cargue la información cuando se esté renderizando
                if( isMounted.current ){
                    setState({
                            loading: false,
                            error: null,
                            data
                        });
                    } 
                //     else {
                //         console.log('setState no se llamó');
                //     }
                // }, 4000);     
            });
        
    }, [url]);


    return state;
    


}
