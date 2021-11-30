import React, { Component, Fragment } from "react";

class NComponent extends Component {
  render() {
    const { numbers } = this.props;
    console.log("NComponent => I'm rendering...");
    return (
      <Fragment>
        <h1>Componente Normal</h1>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default NComponent;
