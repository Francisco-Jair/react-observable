import React, { Component } from "react";
import CardNotas from "./CardNotas";
import "../css/ListaDeNotas.css";

class ListaDeNotas extends Component {
  constructor(props) {
    super(props);
    // Esse construtor não é preciso, ele recebe as propriedade sem o construtor
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desiscrever(this._novasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {/* Usando javascript com JSX */}
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNotas
                indice={index}
                apagarNotas={this.props.apagarNotas}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
