import { Button, TextField } from '@material-ui/core'
import React, {useState} from 'react'

function DadosLogin({aoEnviar, coletardados, validarSenha}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [error, setError] = useState(
            {senha: 
            {validar:true, helperText:""}
        })
    
    return(
        <form>
            <TextField 

                onChange={(event)=>{
                    setEmail(event.target.value)
                }}

                id='email' nome='email' label='E-mail'
                type='email' variant='outlined' 
                color='secondary' fullWidth required
                margin='normal' placeholder='exemple@exmple.com'
                />
            <TextField
                value={password}
                error={!error.senha.validar}
                helperText={error.senha.helperText}

                onBlur={(event)=>{
                    if(password.length < 4 || password.length >=50){
                        setError({senha: {validar: false, helperText: "A senhar precisa ter entre 4 a 50 caracteres"} })
                    }
                    else{
                        setError({senha: {validar: true, helperText: ""} })
                    }
                }}
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
                id='senha' name='senha' label='Password'
                type='password' color='secondary' variant='outlined'
                margin='normal'
                fullWidth required placeholder='Insert here Your Passord'
                />

            <br/>
            <br/>
            <br/>
            <Button 
                label='logar' size='small' margin='normal' fullWidth
                onClick={(e)=> {
                    e.stopPropagation();
                    e.preventDefault();

                    if((email === '') || ((password < 4 || password > 50))){
                        window.alert('ERROR AO SUBMETER CAMPOS OBRIGATÓRIOS')
                    }else{
                        //console.log(nome, sobrenome, cpf, promo, novid);
                        coletardados({email, password})
                    }
                    
                }}   
                variant='outlined' color='secondary'>PROXIMO</Button>

                     
        </form>
    )
}

export default DadosLogin;