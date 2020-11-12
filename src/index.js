import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./components/util/util.css";

import "bootstrap/dist/css/bootstrap.min.css";

import CatalogoPrincipal from "./components/catalogo-principal/catalogo-principal.js";
import BarraNavegacion from "./components/util/barra-navegacion/barra-navegacion.js";
import BarraControl from "./components/util/barra-control/barra-control.js";

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            resultados: [],
            songPlaying: null,
            playing: false,
            pantallaMin: false,
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({ pantallaMin: window.innerWidth <= 756 });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    handleSearch = (e) => {
        if (e.target.value.length == 0) {
            this.setState({ resultados: [] });
        }
        if (e.target.value.length > 2) {
            var request = new Request(
                `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${e.target.value}`
            );
            fetch(request, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "API-Key": "c1f0e677a20634296b972abc4af07bf1",
                },
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.setState({ resultados: data.data });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    audio = new Audio();
    handleSongChange = (id) => {
        var resultado = this.state.resultados.find(
            (resultado) => resultado.id == id
        );
        this.audio.src = resultado.preview;
        this.setState({ songPlaying: resultado, playing: !this.state.playing });
        this.Player();
    };

    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.Player();
    };

    Player = () => {
        if (this.state.playing) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
    };

    render() {
        return (
            <React.StrictMode>
                <div className="container-fluid">
                    <div className="row">
                        <BarraNavegacion pantallaMin={this.state.pantallaMin} />
                        <CatalogoPrincipal
                            resultados={this.state.resultados}
                            id={
                                this.state.songPlaying != null
                                    ? this.state.songPlaying.id
                                    : null
                            }
                            playing={this.state.playing}
                            handleSearch={this.handleSearch}
                            handleSongChange={this.handleSongChange}
                            pantallaMin={this.state.pantallaMin}
                        />
                    </div>
                    {this.state.songPlaying == null ? (
                        ""
                    ) : (
                        <BarraControl
                            handlePlay={this.handlePlay}
                            playing={this.state.playing}
                            songPlaying={this.state.songPlaying}
                        />
                    )}
                </div>
            </React.StrictMode>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
