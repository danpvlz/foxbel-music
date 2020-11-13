import React from "react";
import "./catalogo-principal.css";

import CatalogoTop from "./catalogo-top/catalogo-top.js";
import VideoDetalle from "./video-detalle/video-detalle.js";
import Resultados from "./resultados/resultados.js";

export default class CatalogoPrincipal extends React.Component {
    render() {
        return (
            <div
                className="container"
                style={{
                    marginLeft: this.props.pantallaMin ? "20px" : "330px",
                }}
            >
                <CatalogoTop
                    pantallaMin={this.props.pantallaMin}
                    handleSearch={this.props.handleSearch}
                />
                <VideoDetalle pantallaMin={this.props.pantallaMin} />
                {this.props.resultados.length == 0 ? (
                    ""
                ) : (
                    <Resultados
                        id={this.props.id}
                        playing={this.props.playing}
                        handleSongChange={this.props.handleSongChange}
                        pantallaMin={this.props.pantallaMin}
                        resultados={this.props.resultados}
                    />
                )}
            </div>
        );
    }
}
