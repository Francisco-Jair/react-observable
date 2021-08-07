import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro.jsx";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
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
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
