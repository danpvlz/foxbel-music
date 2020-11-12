import React from 'react';
import './catalogo-top.css';

import  BotonBuscar from './boton-buscar/boton-buscar.js';
import  SesionInfo from './sesion-info/sesion-info.js';



export default class CatalogoTop extends React.Component{
    render(){
        return(
            <div className="catalogo-top row justify-content-between">
                <div className={this.props.pantallaMin ? "col-8" : "col-7"}><BotonBuscar /></div>
               <div className="col-auto"><SesionInfo /></div>
            </div>
        );
    }
}