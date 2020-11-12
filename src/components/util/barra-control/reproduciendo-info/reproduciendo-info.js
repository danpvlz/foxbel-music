import React from "react";
import "./reproduciendo-info.css";

export default class ReproduciendoInfo extends React.Component {
    render() {
        return (
            <div className="row reproduciendo-info">
                <div className="col mr-0 pr-0">
                    <img
                        className="portadaReproduciendo"
                        src={this.props.songPlaying.artist.picture}
                        alt=""
                    />
                </div>
                <div className="info">
                    <div className="bold-qs-14">Canción</div>
                    <p className="cancionInfo regular-qs-12">
                        {this.props.songPlaying.title}
                    </p>
                </div>
            </div>
        );
    }
}
