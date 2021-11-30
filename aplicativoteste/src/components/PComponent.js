import React, { Fragment, PureComponent } from "react";

class PComponent extends PureComponent {
  render() {
    const { numbers } = this.props;
    console.log("PComponent => I'm rendering...");
    return (
      <Fragment>
        <h1>Componente Puro</h1>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default PComponent;
