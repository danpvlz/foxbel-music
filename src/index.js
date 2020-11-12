import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './components/util/util.css'

import "bootstrap/dist/css/bootstrap.min.css";

import CatalogoPrincipal from './components/catalogo-principal/catalogo-principal.js';
import BarraNavegacion from './components/util/barra-navegacion/barra-navegacion.js';
import BarraControl from './components/util/barra-control/barra-control.js';

class Index extends React.Component{
  constructor(){
    super();
    this.state={
      pantallaMin: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({pantallaMin: window.innerWidth <= 756});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  render(){
    return(
      <React.StrictMode>
        <div className="container-fluid">
        <div className="row">
          <BarraNavegacion pantallaMin={this.state.pantallaMin}/>
          <CatalogoPrincipal pantallaMin={this.state.pantallaMin}/>
        </div>
          <BarraControl />
        </div>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));



