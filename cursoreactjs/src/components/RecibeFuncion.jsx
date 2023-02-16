import { useState } from 'react';

export  function RecibeFuncion(props){
    const funcionImprimir = props;
    const [mensaje, setMensaje] = useState("");


    return (
        <div>
            <h1> Vamos a mostrar un mensaje</h1>
            <h2>dasdas</h2>

            <textarea value={mensaje} onChange={() =>{
                // setMensaje(this.value);
                setMensaje("Prueba rara");
                funcionImprimir(mensaje);
            } } />
        </div>
    )
}