/*
 * 1.) Impremente un nuevo botón que haga un Reset a Cero (0), al
 *     contador de la clase.
 */

import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class Contador extends Component {
  constructor(props) {
    super(props);

    //Objeto de estado de control de variables
    this.state = {
      contador: 0
    };
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  reset = () => {
    this.setState({
      contador: 0
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentar}>Aumentar</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <Contador />
    </div>
  );
}
