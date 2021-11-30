import React, { Component, Fragment } from "react";

import NComponent from "../components/NComponent";
import PComponent from "../components/PComponent";

import imagem from "../ifal.png";

class App extends Component {
  state = {
    numbers: []
  };

  render() {
    const { numbers } = this.state;
    return (
      <Fragment>
        <img src={imagem} />
        <h1>IFAL - Instituto Federal De Alogoas</h1>
        <h1>Aplicativo</h1>
        <button onClick={this.handleBtnClick} type="button">
          Adicionar Novo Numero
        </button>
        <NComponent numbers={numbers} />
        <PComponent numbers={numbers} />
      </Fragment>
    );
  }

  handleBtnClick = () =>
    this.setState(({ numbers }) => {
      const MAX = 100;
      const MIN = 1;
      const newNumber = parseInt(Math.random() * (MAX - MIN) + MIN);
      return {
        numbers: [].concat(numbers, newNumber)
      };
    });
}

export default App;
