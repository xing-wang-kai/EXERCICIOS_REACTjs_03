import React, {useState, useEffect} from 'react';

import DadosPessoais from './DadosPessoais';
import DadosLogin from './DadosLogin';
import DadosEntrega from './DadosEntrega';
import {Step, StepLabel, Stepper, Typography} from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCPF}){

    let [estado, setEstado] =useState(0);
    let [dadosColetados, setDadosColetados] =useState({});
    const formulario = [<DadosPessoais  validarCPF={validarCPF} coletardados={coletarDados}/>,
        <DadosLogin  coletardados={coletarDados} />,
        <DadosEntrega coletardados={coletarDados} />,
       <Typography variant="h5" Component='h1' align="center"><br/>Dados Enviados Com sucesso!!!</Typography>, ]


    useEffect(() => {
        if(estado == formulario.length-1){
            aoEnviar(dadosColetados)
        }
    })
            
    return(
        <>
        <Stepper activeStep={estado}>
            <Step><StepLabel>LOGIN</StepLabel></Step>
            <Step><StepLabel>PESSOAIS</StepLabel></Step>
            <Step><StepLabel>ENTEGA</StepLabel></Step>
            <Step><StepLabel>FINALIZAÇÂO</StepLabel></Step>
        </Stepper>
        {formulario[estado]}
        </>
    )

    function coletarDados(dados){
        setDadosColetados({...dadosColetados, ...dados});
        prxEtapa()
    }

    function prxEtapa(){
        setEstado(estado+1)
    }
    
}
export default FormularioCadastro;