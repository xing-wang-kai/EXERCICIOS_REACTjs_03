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

  export {validarCPF, validarSenha};