import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro.jsx";
import ListaDeCategorias from "./components/ListaDeCategorias.jsx";
import "./css/App.css";
import Categoria from "./dados/Categorias.js";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categoria();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
          />
          <ListaDeNotas
            notas={this.notas}
            apagarNotas={this.notas.apagarNotas.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
