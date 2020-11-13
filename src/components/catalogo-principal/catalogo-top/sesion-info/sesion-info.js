import React from "react";
import "./sesion-info.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default class SesionInfo extends React.Component {
    render() {
        return (
            <div className="sesion-info">
                <div className="d-inline sesion-info-icon mr-2">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <p className="d-inline">Francisco M.</p>
            </div>
        );
    }
}
