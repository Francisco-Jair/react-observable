import React, { Component } from "react";
import CardNotas from "./CardNotas";
import "../css/ListaDeNotas.css";

class ListaDeNotas extends Component {
  constructor(props) {
    super(props);
    // Esse construtor não é preciso, ele recebe as propriedade sem o construtor
  }

  render() {
    return (
      <ul className="lista-notas">
        {/* Usando javascript com JSX */}
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNotas
                indice={index}
                apagarNotas={this.props.apagarNotas}
                titulo={nota.titulo}
                texto={nota.texto}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
