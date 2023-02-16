import React from 'react';
import { InputEuros }  from './InputEuros.jsx';

export class ConversorEurosPsta extends React.Component {
    constructor(props){
        super(props);
        this.state = { cantidad: ' ', moneda: '€'};
    /** Debemos enlazar las funciones, porque sino en la llamada del objeto el contexto será diferente
y no encontrará la función setState**/
        this.handleEurosChange = this.handleEurosChange.bind(this);
        this.handleDollarChange = this.handleDollarChange.bind(this);
    }

    /** Declaramos las dos funciones que se encargarán de manejar los dos principales eventos */

    handleEurosChange(cantidadMonedas){
        this.setState({moneda: '€', cantidad: cantidadMonedas});
    };

    handleDollarChange(cantidadMonedas){
        this.setState({moneda: '$', cantidad: cantidadMonedas});
    }

    convertirMoneda(cantidad, tipoaConvertir){
        if(tipoaConvertir === '€'){
            const euros= cantidad * 1.09;
            return euros;
        }else if(tipoaConvertir === '$'){
            const dollar= cantidad / 1.09;
            return dollar;
        }
    }

    render(){
        /** Declaramos variables para asignarles el valor del estado */
        /** Asignamos el valor de moneda, al redibujarlo, va a indicar que input ha sido modificado, 
         * es decir, si la moneda es  $ quiere decir que se ha introducido un valor en el input de $
         *  y el input de € debe hacer una conversión para mostrar su valor
         */
        const cantidad = this.state.cantidad;
        const moneda = this.state.moneda;
        /** A cada Componente Input lo configuramos para que reciba $ y pase a € y viciversa */
        return(
            <div>
            <h1> Vuelta a tan solo unos años atrás</h1>
            <InputEuros 
                moneda='€'
                onValueChange={this.handleEurosChange}
                cantidad={
                    moneda === '€' ? cantidad : this.convertirMoneda(cantidad, '€')
                }
            />
            <InputEuros 
                moneda='$'
                onValueChange={this.handleDollarChange}
                cantidad={
                    moneda === '$' ? cantidad : this.convertirMoneda(cantidad, '$')
                }
            />
            </div>
        )
        
    }
}