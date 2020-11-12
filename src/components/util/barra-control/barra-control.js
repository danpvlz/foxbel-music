import React from "react";
import "./barra-control.css";

import ReproduciendoInfo from './reproduciendo-info/reproduciendo-info.js'
import ReproduciendoAcciones from './reproduciendo-acciones/reproduciendo-acciones.js'
import ReproduciendoVolumen from './reproduciendo-volumen/reproduciendo-volumen.js'

export default class BarraControl extends React.Component {
  render() {
    return (
        <div className="barra-control d-flex justify-content-between fixed-bottom">
            <ReproduciendoInfo />
            <ReproduciendoAcciones />
            <ReproduciendoVolumen />
        </div>
    );
  }
}
