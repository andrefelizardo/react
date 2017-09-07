import React, { Component } from 'react';

class Introducao extends Component {
    render() {
        return (
            <div className="jumbotron ">
                <h1 className="display-3 text-uppercase">Giphy!</h1>
                <p className="lead">Giphy foi uma das APIs que eu encontrei que são simples de trabalhar, então vamos brincar com ela.</p>
                <hr className="my-4" />
                <p>Se quiser ver toda a documentação da API, use o botão abaixo.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="https://developers.giphy.com/docs/#getting-started" role="button">Documentação API</a>
                </p>
            </div>
        )
    };
}

export default Introducao;