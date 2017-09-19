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
        this.props.carregarGifs();
        window.scrollTo(0, 0);
        document.querySelector('#loader').style.display = "flex";
        ServiceBuscaGiphy.buscarTermos(this.refs.stringBusca.value).then((response) => {
            this.props.carregarGifs(response.data.data);
            document.querySelector('#loader').style.display = "none";
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

BuscaDeGifs.proptypes = {
    buscarTermos: React.PropTypes.func.isRequired
}

export default BuscaDeGifs;