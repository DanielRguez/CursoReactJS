import { useState, useEffect } from "react";

export default function Welcome(props){
    console.log("Pintamos el componente Welcome");
    const [semaforo, setSemaforo ] = useState(false); // useState(valorPorDefecto) setSemaforo es el nombre de la primera constante con al primera en mayúscula
    const [counter, setCounter] = useState(0);
    const  {message, name } = props;

    useEffect( () => {
        console.log(semaforo);
    }, [semaforo]);

    const contar = () => {
        console.log("Entrando en la función de contar");
        setCounter(counter+1);
        setSemaforo(!semaforo); //de este modo cambia de un estado true a false y al revés
    }
    return (
      <div id="welcome" className="MainMessage">
        <p>Hola amigo {name}</p>
        <p>{message}</p>
        <h2>El número del contador es {counter}</h2>
        <p> El semáforo está en {semaforo ? "red" : "green"}</p>
        <button type="submit" onClick={ contar}>
            Sumar +1
        </button>
      </div>  
    );
}




