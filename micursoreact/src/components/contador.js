import { useState } from "react";

export default function Contador(props){
    const [counter, setCounter] = useState(0);

    //setCounter(initialvalue);
    return (
      <div>
        <h1>
            Contador con React usando Hooks
        </h1>
        <h2>El número del contador es {counter}</h2>
        <button type="submit" onClick={ () => setCounter(counter+1) }>
            Sumar +1
        </button>
      </div>  
    );
}