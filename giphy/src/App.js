import React, { Component } from 'react';
import './libs/bootstrap.min.css';
import BuscadeGifs from './components/Busca/BuscadeGifs';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand text-uppercase" href="#">Giphy!</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#busca">Busca</a>
            </li>
          </ul>
        </nav>
        <div className="jumbotron ">
          <h1 className="display-3 text-uppercase">Giphy!</h1>
          <p className="lead">Giphy foi uma das APIs que eu encontrei que são simples de trabalhar, então vamos brincar com ela.</p>
          <hr className="my-4" />
          <p>Se quiser ver toda a documentação da API, use o botão abaixo.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="https://developers.giphy.com/docs/#getting-started" role="button">Documentação API</a>
          </p>
        </div>
        <BuscadeGifs />
      </div>
    );
  }
}

export default App;
