import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-uikit-button";

//import App from "./Prueba01";
//import App from "./Prueba02";
import Blog from "./Prueba03";
import Formulario from "./Prueba02";
import Contador from "./Prueba01";

class ControlPruebas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link1: "/p1",
      link1: "/p2",
      link1: "/p3"
    };
  }

  prueba1() {
    return (
      <div>
        <Contador />
      </div>
    );
  }

  prueba2() {
    return (
      <div>
        <Formulario />
      </div>
    );
  }

  prueba3() {
    return (
      <div>
        <Blog />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center">Prueba REACT - Menu</h1>
        <Router>
          <div
            style={{ border: "solid" }}
            className="container d-flex justify-content-center"
          >
            <form style={{ margin: "50px 0px" }}>
              <div className="form-group ">
                <Link to="/p1">
                  <Button className="form-control btn btn-primary">
                    Prueba 1
                  </Button>
                </Link>
              </div>
              <div className="form-group">
                <Link to="/p2">
                  <Button className="form-control btn btn-danger">
                    Prueba 2
                  </Button>
                </Link>
              </div>
              <div className="form-group">
                <Link to="/p3">
                  <Button className="form-control btn btn-info">
                    Prueba 3
                  </Button>
                </Link>
              </div>
            </form>
          </div>

          <br />
          <br />
          <br />
          <br />

          <Switch>
            <Route path="/p1">
              <Contador />
            </Route>
            <Route path="/p2">
              <Formulario />
            </Route>
            <Route path="/p3">
              <Blog />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />

      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      />
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      />

      <ControlPruebas />
    </div>
  );
}
