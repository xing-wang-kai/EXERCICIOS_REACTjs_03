import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container Component="article" maxWidth="sm">
        <Typography variant="h3" Component='h1' align="center">Formulário de cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
