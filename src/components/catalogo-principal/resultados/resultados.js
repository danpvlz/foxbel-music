import React from 'react';
import './resultados.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

export default class Resultados extends React.Component{
    crearAudio = (url) => new Audio(url);
    render(){
        return(
            <div className="resultados ml-4">
                <h2>Resultados</h2>
                <div className="row ml-0 d-flex flex-wrap">
                {
                    this.props.resultados != null ?
                    this.props.resultados.map((resultado,index)=>{
                        return <div key={index} className="card resultado col-2 pl-0 pr-0 mr-3 mb-3 border-0">
                        <img className="card-img-top"
                                src={resultado.artist.picture}
                                alt={resultado.title}
                        />
                        <span onClick={()=>{this.props.handleSongChange(resultado.id)}}><FontAwesomeIcon icon={this.props.playing && this.props.id==resultado.id ? faPause : faPlay} color="white" size="2x"/></span>
                        <div className="card-body pl-0 pt-1 pb-2">
                        <label className="card-text mb-0 pb-0">{resultado.title}</label> <br/>
                        <label className="card-text text-muted">{resultado.artist.name}</label>
                        </div>
                    </div>
                    })
                    :
                    ""
                }
                
                </div>
                
                
            </div>
        );
    }
}


