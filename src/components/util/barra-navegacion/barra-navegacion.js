import React from "react";
import "./barra-navegacion.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import logo from "../../../assets/img/foxbel-music.png";

export default class BarraNavegacion extends React.Component {
  constructor(){
    super();
    this.state={
      mostrarMenu: false,
    }
  }

  handleDisplay=()=>{
    this.setState({mostrarMenu: !this.state.mostrarMenu})
  }
  
  render() {
    return (
      <div id="barra-navegacion" className="ml-0 pl-0 mr-0 pr-0" style={{width: this.props.pantallaMin ? '0px !important' : '330px !important'}}>   
      <div className="wrapper">
      <div className="wrapper-button mr-2">
        <span style={{color: this.props.pantallaMin && !this.state.mostrarMenu ? 'gray' : 'white', left: this.props.pantallaMin && !this.state.mostrarMenu ? '10px' : '300px', display: this.props.pantallaMin ? 'block' : 'none'}}><FontAwesomeIcon id="icon-barra-mostrar" onClick={this.handleDisplay} icon={this.props.pantallaMin && !this.state.mostrarMenu ? faChevronRight : faChevronLeft } size="xs"/></span>
      </div>   
      <nav id="sidebar" style={{display: this.props.pantallaMin && !this.state.mostrarMenu  ? 'none' : 'block'}}>
          <div className="sidebar-header">
            <img className="logo" src={logo} alt="Logo Foxbel Music"/>
          </div>
          <ul className="list-unstyled components">
            <p className="bold-white-22 ">Mi Librería</p>
            <li className="active"><a className="regular-white-16" href="">Recientes</a></li>
            <li><a className="regular-white-16" href="">Artistas</a></li>
            <li><a className="regular-white-16" href="">Álbums</a></li>
            <li><a className="regular-white-16" href="">Canciones</a></li>
            <li><a className="regular-white-16" href="">Estaciones</a></li>
          </ul>
          <ul className="list-unstyled components">
            <p className="bold-white-22">Playlist</p>
            <li className="active"><a className="regular-white-16" href="">Metal</a></li>
            <li><a className="regular-white-16" href="">Para bailar</a></li>
            <li><a className="regular-white-16" href="">Rock 90s</a></li>
            <li><a className="regular-white-16" href="">Baladas</a></li>
          </ul>
        </nav> 
      </div>
      </div>
    );
  }
}
