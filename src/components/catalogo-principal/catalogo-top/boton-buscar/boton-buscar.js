import React from "react";
import "./boton-buscar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default class BotonBuscar extends React.Component {
    render() {
        return (
            <div className="input-group input-buscar mr-0 pr-0">
                <input
                    onChange={this.props.handleSearch}
                    className="form-control border-right-0 border"
                    type="search"
                />
                <span className="input-group-append">
                    <div className="input-group-text bg-transparent">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </span>
            </div>
        );
    }
}
