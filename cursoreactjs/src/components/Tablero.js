import React from "react";
import Carta from "./Carta";
import CuboAmarillo  from "../img/cuboamarillo.jpeg";
import CuboAzul  from "../img/contenedorAzul.png";
import CuboRojo  from "../img/cuborojo.jpeg";

export default class Tablero extends React.Component {
    maxCartas = 6;
    state = {
        cartas: []
    }

    constructor(props){
        super(props);
        this.GeneradorTablero();
    }

    GeneradorTablero(){
        let i=0, j=0;
        for(i=0; i < this.maxCartas;  i++){
            //Generamos el tipo de carta
            let tipo= j;
            //obtenemos una posición libre dentro del tablero
            let posicion = this.DevuelvePosicionLibre();
            this.state.cartas.push({id:i, tipo: tipo, posicion: posicion});
            //Hacemos lo mismo con su pareja, el tipo se mantiene
            i++;
            posicion = this.DevuelvePosicionLibre();
            this.state.cartas.push({id:i, tipo: tipo, posicion: posicion});
            j++;
        }
        console.log(this.state.cartas);
    }

    DevuelvePosicionLibre(){
        let pos = parseInt(Math.random() * (this.maxCartas ));
        while(this.state.cartas.some( (e) => e.posicion === pos )){
            pos = Math.random() * (this.maxCartas );
        }
        return parseInt(pos);
    }

    ObtenImagenCarta(tipo){
        switch(tipo){
            case "0":
                return CuboAmarillo;
            case "1":
                return CuboAzul;
            case "2":
                return CuboRojo;
            default:
                return CuboAmarillo; 
        }
    }

    render(){
        return (
            <div>
                <h1>Bienvenidos al juego</h1>
                {
                    this.state.cartas.map( (e) => {
                        <Carta key={e.id.toString()} id={e.id} tipo={e.tipo} imagen={this.ObtenImagenCarta("3")} ></Carta>
                    })
                }

                {/**<Carta id="001" tipo="3" imagen={this.ObtenImagenCarta("3")}></Carta>**/}
            </div>
        );

    }
}