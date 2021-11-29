import React, { Component } from 'react';
import imagem from './if.png';
import './App.css';
import { Link } from 'react-router-dom'


class Mais extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={imagem} className="App-logo" alt="logo" />
          <h1 className="App-title">IFAL</h1>
          <h1 className="App-text">O Instituto Federal de Alagoas é um complexo de educação, gratuita e de qualidade, que engloba pesquisa, extensão e ensino desde a formação básica à pós-graduação, proporcionando, deste modo, uma formação integral ao cidadão, por intermédio dos cursos de formação inicial, técnicos, superiores de tecnologia, bacharelados, de licenciaturas e pós-graduações lato sensu e stricto sensu. </h1>
        </header>
        <p className="App-intro">
          <Link to="/">Ir para a página home </Link>
        </p>
      </div>
    );
  }
}

export default Mais;