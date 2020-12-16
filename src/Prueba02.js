/*
 * 1.) Optimice el siguiente  componente de clase  para que solo tenga
 *     un método de sincronización, para actualizar los valores de los
 *     identificadores email y password en el estado del componente
 */

import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  /*
  syncEmailChanges(email) {
    this.setState({
      email: email
    });
  }

  syncPasswordChanges(password) {
    this.setState({
      password: password
    });
  }
*/
  /**
   * nameElement = nombre de la llave de la variable de estado
   * element  = valor enviado desde el DOM
   */
  syncUniqueMethodEmailPasswordChangues(nameElement, element) {
    
    this.setState({
      [nameElement]: element
    });
  }

  submitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          onChange={ev => {
            this.syncUniqueMethodEmailPasswordChangues(
              ev.target.type,
              ev.target.value
            );
          }}
          type="email"
          value={this.state.email}
          placeholder="Email"
        />
        <input
          onChange={ev => {
            this.syncUniqueMethodEmailPasswordChangues(
              ev.target.type,
              ev.target.value
            );
          }}
          type="password"
          value={this.state.password}
          placeholder="*********"
        />
        <div>
          <input
            onClick={this.submitForm}
            type="submit"
            value="Iniciar sesión"
          />
        </div>
      </form>
    );
  }
}

export default function App() {
  return (
    <div>
      <Formulario />
    </div>
  );
}
