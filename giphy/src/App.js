import React, { Component } from 'react';
import './libs/bootstrap.min.css';
import BuscadeGifs from './components/Busca/BuscadeGifs';
import Nav from './components/Nav';
import Introducao from './components/Introducao';
import ListaGifs from './components/Gifs/ListaGifs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }

    this.carregarGifs = this.carregarGifs.bind(this);
  }

  carregarGifs(gifs) {
    this.setState({gifs: gifs});
  }

  render() {
    return (
      <div>
        <Nav />
        <Introducao />
        <BuscadeGifs carregarGifs={this.carregarGifs} />
        <ListaGifs />
      </div>
    );
  }
}

export default App;
