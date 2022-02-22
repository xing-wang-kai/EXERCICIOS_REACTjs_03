import React, {useState} from "react";
import {TextField, Button, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro() {
    const [nome, setNome] = useState("");
  return (
    <form onSubmit={(event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log(nome);
        }}>

        <TextField 
            value = {nome}
            onChange={(event) => {
                setNome(event.target.value);
            if(nome.length >= 5){
                    setNome(nome.substring(0, 5));
                }
            }}
            
            id='nome'          label='Nome' 
            variant="outlined" fullWidth 
            margin="normal"    color='Secondary'/>
        <TextField 
            id='Sobrenome'     label='Sobrenome' 
            variant="outlined" fullWidth 
            margin="normal"    color='Secondary' />

        <TextField 
            id='CPF'            label='CPF' 
            variant="outlined"  fullWidth 
            margin="normal"     color='Secondary'/>
        
        <FormControlLabel 
            label='Novidades'
            control={
                <Switch 
                name="novidades" label="novidades" 
                defaultChecked   color='Secondary'/>}/>

        <FormControlLabel
            label='Promoções'
            control={
                <Switch 
                name='Promoções' label='Promoções' 
                defaultChecked   color='Secondary'/>}/>
        
        
        <Button type='submite' variant="contained" 
                color='Secondary'>Cadastrar</Button>      
    </form>
  );
}

export default FormularioCadastro;