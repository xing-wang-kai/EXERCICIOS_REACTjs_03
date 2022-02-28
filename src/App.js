import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

class App extends Component {
  
  render() {
    return (
      <Container maxWidth='sm' component='article'>
        <Typography variant="h4" Component='h1' align="center">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviar} validarCPF={validarCPF} validarSenha={validarSenha} />
      </Container>
    );
  }
}
function aoEnviar(dados){
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length < 11){
    return {validar:false, helperText:"O CPF precisa ter 11 digitos"}
  }else{
    return {validar:true, helperText:""}
  }
}


function validarSenha(senha){
  if(senha.length < 4 || senha.length > 72){
    return {validar:false, helperText:"A senha informadas deve ser entre 4 e 72"}
  }else{
    return {validar:true, helperText:""}
  }
}
export default App;
