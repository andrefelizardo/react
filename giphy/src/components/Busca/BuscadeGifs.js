import React, { Component } from 'react';
import ServiceBuscaGiphy from '../../services/ServiceBuscaGiphy';
import './Busca.css';

class BuscaDeGifs extends Component {
    constructor(props) {
        super(props);
        this.acaoSubmit = this.acaoSubmit.bind(this);
    }

    acaoSubmit(e) {
        e.preventDefault();
        console.log(this.refs.stringBusca.value);
        ServiceBuscaGiphy.buscarTermos(this.refs.stringBusca.value).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="container">
                <form className="form-inline" onSubmit={this.acaoSubmit}>
                    <div className="form-group row">
                        <input type="text"
                            className="form-control"
                            placeholder="Pesquise um Gif"
                            ref="stringBusca"
                        />
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BuscaDeGifs;