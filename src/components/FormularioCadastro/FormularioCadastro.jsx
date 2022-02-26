import React, {useState} from 'react';
import { Button, FormControlLabel, TextField, Switch } from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCPF}){
    let [nome, setNome] = useState('');
    let [sobrenome, setSobrenome] = useState('');
    let [cpf, setCpf] = useState('');
    let [promo, setPromo] = useState(true);
    let [novid, setNovid] = useState(true);
    let [error, setError] = useState(
        {cpf:
            {validar:true, helperText:""}
        })
    
    return(
        <form>
 
            <TextField
                value={nome}

                onChange={(event) => {
                    setNome(event.target.value)
                }}

                id ="Nome" label='Nome'
                placeholder='xxx.xxx.xxx-xx'  margin='normal'
                color='secondary' variant='outlined'
                fullWidth required autoFocus
                />

            <TextField 
                value={sobrenome}

                onChange={(event) =>{
                    setSobrenome(event.target.value);
                }}

                id ="Sobrenome" label='Sobrenome'
                placeholder='xxx.xxx.xxx-xx' margin='normal'
                color='secondary' variant='outlined'
                fullWidth required
                />

            <TextField 
                value={cpf}
                error={!error.cpf.validar}
                helperText={error.cpf.helperText}

                onBlur={(event)=>{
                    const valido = validarCPF(cpf)
                    setError({cpf:valido})
                }}

                onChange={(event)=>{
                    let tempCpf = event.target.value
                    if(tempCpf.length >= 14){
                        tempCpf = tempCpf.substring(0,14)
                    }
                    setCpf(tempCpf);
                }}

                id ="CPF" label='CPF'
                placeholder='xxx.xxx.xxx-xx'margin='normal'
                color='secondary' variant='outlined'
                required fullWidth
                />

            <FormControlLabel
                label='Promoção'
                control={
                    <Switch 

                    checked={promo}
                    onChange={(event)=>{
                        setPromo(event.target.checked)
                    }}

                    color = 'secondary' margin='normal'
                    size='small' defaultChecked={promo}/>
                }
                />

            <FormControlLabel
                label='Novidades'
                control={
                    <Switch 

                    checked={novid}
                    onChange={(event) => {
                        setNovid(event.target.checked)
                    }}

                    color = 'secondary' margin='normal'
                    size='small' defaultChecked={novid}/>
                }
                />
            
            <Button 
                variant="outlined" color='secondary'
                fullWidth size='smalls'
                
                onClick={(e)=> {
                    e.stopPropagation();
                    e.preventDefault();
                    //console.log(nome, sobrenome, cpf, promo, novid);
                    aoEnviar({nome, sobrenome, cpf, promo, novid});
                }}
                
                >Cadastrar</Button>

        </form>

    )
}
export default FormularioCadastro;