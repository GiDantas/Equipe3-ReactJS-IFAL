import React, { Component } from 'react';
import imagem from './if.png';
import './App.css';
import { Link } from 'react-router-dom'


class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={imagem} className="App-logo" alt="logo"/>
          <h1 className="App-title">Equipe 3</h1>
          <h1 className="App-text">Caic Vinícius - Eliabe Nunes - Gisele Dantas - Joice Naiara - Micaele Rocha</h1>
        </header>
        <p className="App-intro">
          <Link to="/">Ir para a página home </Link>
        </p>
      </div>
    );
  }
}

export default Sobre;
