import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import BannerPrincipal from './banner/bannerPrincipal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Home titulo="André Felizardo" />
          <Home titulo="Felipe Borde" />
          <Home titulo="Marvin Thomaz" />
        </div>
        <BannerPrincipal />
      </div>
    );
  }
}

export default App;
