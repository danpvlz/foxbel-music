import React from "react";
import "./reproduciendo-volumen.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff,faVolumeUp,faVolumeDown, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

export default class ReproduciendoVolumen extends React.Component {
    constructor(){
        super();
        this.state={
            icon: faVolumeUp,
        };   
    }

    handleRangeChange=(e)=>{
        if(e.target.value>=50){
            this.setState({icon: faVolumeUp});
        }else{
            if(e.target.value>0){
                this.setState({icon: faVolumeDown});
            }else{
                this.setState({icon: faVolumeMute});
            }
        }
        
    }
  
  render() {
    return (
        <div id="reproduciendo-volumen" className="row">
            <div className="col-auto">
                <input onChange={this.handleRangeChange} type="range" min="0" max="100"></input>
            </div>
            <div className="col reproduciendo-volumen-icon">
                <span><FontAwesomeIcon icon={faVolumeOff} color="white"/></span>
            </div>
        </div>
    );
  }
}
