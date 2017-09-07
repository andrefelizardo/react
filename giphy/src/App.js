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
      gifs: [],
      listaGifs: []
    }

    this.carregarGifs = this.carregarGifs.bind(this);
    this.setarGifs = this.setarGifs.bind(this);
  }

  carregarGifs(gifs) {
    this.setState({gifs: gifs});
    console.log('carregar gifs ' + gifs);
  }

  setarGifs(listaGifs) {
    this.setState({listaGifs: listaGifs});
    console.log('setando gifs ' + listaGifs);
  }

  render() {
    return (
      <div>
        <Nav />
        <Introducao />
        <BuscadeGifs carregarGifs={this.carregarGifs} />
        <ListaGifs setarGifs={this.setarGifs} />
      </div>
    );
  }
}

export default App;
