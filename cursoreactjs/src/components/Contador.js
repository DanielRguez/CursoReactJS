import {useState} from "react";

export default function Contador(props){
    const [initialValue] = props;
    const [ contador, setContador] = useState(parseInt(initialValue));

    return (
        <div>
            <h1> El valor del contador es {contador} </h1>
            <button onClick={ () => setContador(contador+1)}> Suma +1</button>
        </div>
    )

}