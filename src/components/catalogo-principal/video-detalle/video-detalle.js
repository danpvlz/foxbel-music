import React from "react";
import "./video-detalle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default class VideoDetalle extends React.Component {
    render() {
        return (
            <div>
                <div className="video-detalle ml-4">
                    <div className="portada-video-detalle ml-0">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                        />
                        <span>
                            <FontAwesomeIcon
                                icon={faPlay}
                                color="white"
                                size="5x"
                            />
                        </span>
                    </div>
                    <div className="detalle-video-detalle">
                        <div className="contenido">
                            <div className="row">
                                <div className="bold-white-22">
                                    <p>Adele</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-inline regular-white-14">
                                    <label className="mr-4">
                                        Lo mejor de adele
                                    </label>
                                    <label className="seguidores">
                                        312,143 seguidores
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <p className="detalle regular-white-lineheight-20-paragraph-12">
                                    Adele Laurie Blue Adkins (Tottenham,
                                    Londres, Inglaterra, 5 de mayo de 1988),
                                    conocida simplemente como Adele, es una
                                    cantante, compositora y multinstrumentista
                                    británica.8​{" "}
                                </p>
                            </div>
                            <div className="row align-items-end">
                                <div className="d-inline regular-white-14">
                                    <button className="btn reproducir mr-2">
                                        Reproducir
                                    </button>
                                    <button className="btn seguir mr-2">
                                        Seguir
                                    </button>
                                    <button className="btn mas mb-2">
                                        ...
                                    </button>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
