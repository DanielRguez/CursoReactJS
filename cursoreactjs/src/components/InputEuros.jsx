import React from 'react';

export class InputEuros extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        /** Hacemos bind con la función propia de la clase  */
        this.handleChange = this.handleChange.bind(this);     
    }

    handleChange(e){
        /** llamamos a la funcion onValueChange que es la función 
         * perteneciente al padre y se ha recibido como props */
        this.props.onValueChange(e.target.value);
    }

    render(){
        const valor = this.props.cantidad;
        const moneda = this.props.moneda;
        return (
            <div>
                <legend>Introduce la cantidad de {moneda}</legend>
                <input type="number"  value={valor} onChange={this.handleChange}></input>
            </div>
        )
    }
}