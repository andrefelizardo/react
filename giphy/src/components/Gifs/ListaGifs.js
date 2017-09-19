import React, { Component } from 'react';
import './ListaGifs.css';

class ListaGifs extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState({ numGifs: props.gifs.length });
    }

    render() {
        const { gifs } = this.props.gifs;
        const gifsLista = this.props.gifs.map(function (gif, key) {
            return (
                <div key={key} className="card">
                    <img src={gif.images.original.url} />
                </div>
            )
        });

        return (
            <div className="container container-gifs">
                <div className="row">
                    {gifsLista}
                </div>
            </div>
        )
    };
}

export default ListaGifs;