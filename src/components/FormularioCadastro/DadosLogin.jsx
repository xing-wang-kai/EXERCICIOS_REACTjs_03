import { Button, formatMs, TextField } from '@material-ui/core'
import React, {useState} from 'react'

function DadosLogin({aoEnviar, coletardados}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                    coletardados({email, password})
                }}   
                variant='outlined' color='secondary'>Finalizar Login</Button>

                     
        </form>
    )
}

export default DadosLogin;