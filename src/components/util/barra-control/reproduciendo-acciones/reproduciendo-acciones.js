import React from "react";
import "./reproduciendo-acciones.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStepBackward,
    faStepForward,
    faPlay,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

export default class ReproduciendoAcciones extends React.Component {
    render() {
        return (
            <div className="acciones row align-items-center">
                <span className="steps">
                    <FontAwesomeIcon icon={faStepBackward} color="white" />
                </span>
                <span className="play" onClick={this.props.handlePlay}>
                    <FontAwesomeIcon
                        icon={!this.props.playing ? faPlay : faPause}
                        swapOpacity
                        color="white"
                    />
                </span>
                <span className="steps">
                    <FontAwesomeIcon icon={faStepForward} color="white" />
                </span>
            </div>
        );
    }
}
