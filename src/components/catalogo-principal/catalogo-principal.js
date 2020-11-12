import React from 'react';
import './catalogo-principal.css';

import  CatalogoTop from './catalogo-top/catalogo-top.js';
import  VideoDetalle from './video-detalle/video-detalle.js';
import  Resultados from './resultados/resultados.js';



export default class CatalogoPrincipal extends React.Component{
    render(){
        return(
        <div className="container" style={{marginLeft: this.props.pantallaMin ? '20px' : '330px'}}>
            <CatalogoTop pantallaMin={this.props.pantallaMin}/>
            <VideoDetalle pantallaMin={this.props.pantallaMin}/>
            <Resultados pantallaMin={this.props.pantallaMin}/>
        </div>
        );
    }
}