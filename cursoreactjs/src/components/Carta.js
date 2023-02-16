import React from "react";

export default class Carta extends React.Component {

    state = {       
        tipo  : 12,
        id : 9,
        imagen: null,
        posiciontablero : null,
        posicion: "oculta"
    }


    constructor(props){
        super(props);
        //La siguiente linea daría un warning, no se puede hacer setState hasta que el componente
        //haya sido montado
        //this.setState({tipo:this.props.tipo }, {id: this.props.id})
        this.state.tipo = this.props.tipo;
        this.state.id =this.props.id;
        this.state.imagen = this.props.imagen;
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        console.log()
        // if(this.state.posicion !== "resuelta"){
        //     posicion === "oculta" ? this.setState(posicion: "bocaarriba");  : this.setState(posicion: "oculta");
            
        // }
    }


    render() {
        const imag= this.state.imagen;
        return (
            <div>
                <img src={imag} alt="Imagen" onClick={this.handleOnClick}></img>
            </div>

        );

    }


}