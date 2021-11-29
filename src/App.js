import React, { Component } from 'react';
import imagem from './if.png';
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={imagem} className="App-logo" alt="logo" />
          <h1 className="App-title">IFAL Campus Palmeira dos Índios</h1>
          <h1 className="App-text">Redirecionamento de Página com React Router</h1>
        </header> 
        <p className="App-intro">
          <Link to="/sobre">Ir para a página sobre</Link>
        </p>
        <p className="App-intro">
          <Link to="/mais">Ir para a página mais</Link>
        </p>
      </div>
    );
  }
}

export default App;
