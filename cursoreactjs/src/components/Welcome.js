import { useState, useEffect } from "react";

export default function Welcome(props){
    const {message, name  } = props;
    const [semaforo, setSemaforo] = useState(false);
    
    console.log(props);

    useEffect(() => {
      console.log(semaforo);
    }, [semaforo])
    
    return (
        <div> 
            <h1>{message} </h1>
            <h2>{name} </h2>
            
            <button onClick={() =>setSemaforo(!semaforo)}>Pulsame</button>
            
        </div>
    );
}