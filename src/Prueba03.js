/*
 * 1.) Revise y entienda que hace el siguiente componente
 * 2.) Usando cualquier técnica de maquetación web, mejore
 *     la presentación de lso datos al usuario
 * 3.) Resuelva el Warning:
 *     Each child in a list should have a unique "key" prop.
 */

import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

    promesa
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
      });
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>Grupo - idUsuario</th>
              <th>Id</th>
              <th>Titulo</th>
              <th>Contenido</th>
            </tr>
          </thead>

          <tbody>
            {this.state.articles.map(article => {
              return (
                <tr key={article.userId + " - " + article.id}>
                  <td>
                    <b>{article.userId}</b>
                  </td>
                  <td>
                    <b>{article.id}</b>
                  </td>
                  <td>{article.title}</td>
                  <td>{article.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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

      <Blog />
    </div>
  );
}
