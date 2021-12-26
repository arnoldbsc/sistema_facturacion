import React from 'react'
import { Redirect } from 'react-router'
import Content from '../component/content'
import Form from '../component/form'
import axios from 'axios'
import {isAuth, JSONBOX_URL, setAuth} from './authData'

const data = [
    {
        _id: '0',
        title: 'Usuario',
        pattern: '[a-zA-Z ]{5,50}',
        message: 'Solo es posible ingresar letras mas no numeros, minimo 5 caracteres y maximo 50 caracteres'
    },
    {
        _id: '1',
        title: 'Contraseña',
        type: 'password'
    },
    {
        _id: '3',
        value: 'Ingresar',
        type: 'submit'
    }
]

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {log: isAuth};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateUser(datesToCompare, user){
        return datesToCompare.map((value) =>{
            if(value.name === user[0].value){
                if(value.password === user[1].value){
                    setAuth(true)
                    this.setState({log: true})
                    return true
                }
            }
        })[0]
    }

    handleSubmit(passData){
        return event => {
            event.preventDefault()
            if(passData[0].value.charAt(passData[0].value.length - 1) !== ' '){
                axios.get(JSONBOX_URL + '/users').then(res => {
                    if(!this.validateUser(res.data, passData)){
                        alert('Usuario o contraseña invalida')
                    }
                })
            }
            else{
                alert('El ultimo caracter es un espacio')
            }
        }
    }
    render() {
        if(this.state.log){
            return <Redirect to='/usuarios'/>
        }
        return (
            <Content>
                <Form onSubmit={this.handleSubmit} initialData={data}/>
            </Content>
        )
    }
}