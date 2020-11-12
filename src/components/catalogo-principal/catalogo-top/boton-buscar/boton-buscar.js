import React from 'react';
import './boton-buscar.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default class BotonBuscar extends React.Component{

    handleSearch=()=>{
        var request = new Request('https://api.deezer.com/search?q=eminem');
        fetch(request, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'API-Key': 'c1f0e677a20634296b972abc4af07bf1'
            }
          })
        .then(response=>{
            console.log(response);
            return response.json();
        })
        .then(data=>{
            console.log(data);
        })
        .catch(e=>{
            console.log(e);
        });
    }

    render(){
        return(
            <div className="input-group input-buscar mr-0 pr-0">
                <input onKeyPress={this.handleSearch} className="form-control border-right-0 border" type="search" />
                <span className="input-group-append">
                    <div className="input-group-text bg-transparent"><FontAwesomeIcon icon={faSearch} /></div>
                </span>
            </div>
        );
    }
}