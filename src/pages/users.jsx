import React from 'react';
import Header from '../component/header';
import NavBar from '../component/navBar';
import Content from '../component/content';
import ShowOrInsert from '../component/showOrInsert'
import Form from '../component/form';
import axios from 'axios';
import { Navigate } from 'react-router'
import {isAuth, JSONBOX_URL} from './authData';

const data =[
    {
        _id: '0',
        title: 'Nombre',
        pattern: '[a-zA-Z ]{5,50}',
        message: 'Solo es posible ingresar letras mas no numeros, minimo 5 caracteres y maximo 50 caracteres'
    },
    {
        _id: '1',
        title: 'DNI',
        pattern: '[0-9]{8,8}',
        message: 'Solo es posible ingresar valoes numericos, la cantidad deve ser de 8 digitos'
    },
    {
        _id: '2',
        title: 'Email',
        type: 'email'
    },
    {
        _id: '3',
        title: 'Puesto',
        pattern: '[a-zA-Z]{3,20}$',
        message: 'Solo se permite ingresar: (Gerente, Cajero, Vendedor y Administrador), minimo 3 caracteres y maximo 20 caracteres'
    },
    {
        _id: '4',
        title: 'Contraseña',
        type: 'password'
    },
    {
        _id: '5',
        value: 'Insertar',
        type: 'submit'
    }
]

export default class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {toPost: {}}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    dataToPostSyntax(dataToConvert){
        const out = {
            dni: dataToConvert[1].value,
            name: dataToConvert[0].value,
            email: dataToConvert[2].value,
            puesto: dataToConvert[3].value,
            password: dataToConvert[4].value
        }
        return out
    }

    validateData(dataToCompare, data){
        if(data.name.charAt(data.name.length - 1) === ' '){
            alert('El ultimo caracter de nombre es un espacio')
            return false
        }
        return dataToCompare.map(item =>{
            if(item.name === data.name){
                alert('El nombre correspondiente ya existe')
                return false
            }
            if(item.dni === data.dni){
                alert('El DNI correspondiente ya existe')
                return false
            }
        })[0]
    }

    constructData(data){
        return data.dni + ' ' + data.name
    }
    
    handleSubmit(passData){
        return event => {
            event.preventDefault()
            const toPost = this.dataToPostSyntax(passData)
            axios.get(JSONBOX_URL + '/users').then(res => {
                if(this.validateData(res.data, toPost) !== false){
                    axios.post(JSONBOX_URL + '/users', toPost).then(res => {
                        if(res.status !== 201){
                            alert('No se pudo insertar en la base de datos')
                        }
                        else{
                            alert('Se inserto con exito')
                        }
                    })
                }
            })
        }
    }
    render() {
        if(isAuth){
            return(
                <div>
                    <Header>Usuarios</Header>
                        <Content>
                            <ShowOrInsert table='users' onDeploy={this.constructData}>
                                <Form onSubmit={this.handleSubmit} initialData={data}/>
                            </ShowOrInsert>
                        </Content>
                    <NavBar></NavBar>
                </div>
            )
        }
        else{
            return <Navigate to='/'/>
        }
    }
}