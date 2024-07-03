import React from 'react'
import { Container, Form } from './styles'
import InputCustomizado from 

const Login = () => {

const handleSubmit = async () => {
    alert('Login')

}


    const handleChange = (event) => {
        console.log('Digitando .. ', event.target.value)
return (

    <Container>
        <Form>
        <h1>Faça o seu login </h1>
        <Input
        name='email'
        placeholder='Digite seu e-mail'
        onChange={handleChange}
        type='email'
        />
        <Input
        name="password"
        placeholder="Digite sua senha"
        onChange={handleChange}
        type='email'
        />
        <Botao
        type='submit'
        text='Entrar'
        onClick={handleSubmit}
        // disable={}

   
        <div>
            <p>Não possui conta?</p>
            <a> Cadastrar </a>
        </div>

        </Form>
    </Container>
)

}