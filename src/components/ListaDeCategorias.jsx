import React, { Component } from "react";
import "../css/ListaDeCategorias.css";

class ListaDeCategorias extends Component {
  _handlerEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categorias, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categorias}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categoria_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
