import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro.jsx";
import ListaDeCategorias from "./components/ListaDeCategorias.jsx";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  adicionarCategoria(nomeCategoria) {
    console.log(nomeCategoria);
    const novasCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novasCategorias };
    this.setState(novoEstado);
  }

  apagarNotas(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);

    this.setState({ notas: arrayNotas });
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novaArrayNotas = [...this.state.notas, novaNota];
    const novoState = {
      notas: novaArrayNotas,
    };

    this.setState(novoState);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNotas={this.apagarNotas.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
