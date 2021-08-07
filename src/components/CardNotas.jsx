import React, { Component } from "react";
import "../css/CardNotas.css";
//import deleteSvg from "../assets/img/delete.svg";
import { ReactComponent as DeleteSVG } from "../assets/img/delete.svg";

class CardNotas extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNotas(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          {/* <img src={deleteSvg} /> */}
          <DeleteSVG onClick={this.apagar.bind(this)} />
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNotas;
