import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar, coletardados}){
    const [cep, setCEP] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumber] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    return(
        <form >
            <TextField

                onChange={(event)=>{
                    setCEP(event.target.value)
                }}

                id='CEP' name="CEP" label="CEP"
                type='number' margin='normal'
                size='small' color='secondary' variant='outlined'
                placeholder='Insert Your CEP number'
                required

            />
            <TextField
                
                onChange={(event)=>{
                    setEndereco(event.target.value)
                }}

                id='Endereço' name='Endereço' label='Endereço'
                size='small' color='secondary' variant='outlined' margin='normal'
                required type='text' placeholder='Insert here your address' fullWidth

            />
             <TextField

                onChange={(event)=>{
                    setNumber(event.target.value)
                }}

                id='Number' name='Number' label='Number' type='number'
                color='secondary' variant='outlined' margin='normal'
                size='small' placeholder='insert here your house Number' required

            />
            <TextField

                onChange={(event)=>{
                    setEstado(event.target.value)
                }}                

                id='Estado' name='Estado' label='Estado'
                color='secondary' variant='outlined' margin='normal'
                size='small' placeholder='Insert here Your States' required

            />
            <TextField

                onChange={(event)=>{
                    setCidade(event.target.value)
                }} 

                id='Cidade' name='cidade' label='cidade'
                color='secondary' variant='outlined' margin='normal'
                size='small' placeholder='Insert herer Your City'

            />
            
            <br/><br/><br/>

            <Button
                id='button' name='button' label='button'
                variant='outlined' color='secondary'
                size='small' margin='normal' 
                fullWidth 

                onClick={(e)=> {
                    e.stopPropagation();
                    e.preventDefault();
                    if((cep === '') || (endereco === '') || (numero === '') || (cidade === "") || (estado) === ''){
                        window.alert('ERROR AO SUBMETER CAMPOS OBRIGATÓRIOS')
                    }else{
                        coletardados({cep, endereco, numero, cidade, estado})
                    }
                }} 
                >FINALIZAR</Button>


        </form>
    )
}

export default DadosEntrega;