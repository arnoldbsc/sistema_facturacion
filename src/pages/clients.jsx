import React from 'react';
import Header from '../component/header'
import NavBar from '../component/navBar'
import Content from '../component/content'
import Form from '../component/form'
import ShowOrInsert from '../component/showOrInsert'
import axios from 'axios'
import { Redirect } from 'react-router'
import {isAuth, JSONBOX_URL} from './authData';

const data = [
    {
        _id: '0',
        title: 'Nombre',
        pattern: '[a-zA-Z ]{5,50}',
        message: 'Solo es posible ingresar letras mas no numeros, minimo 5 caracteres y maximo 50 caracteres'
    },
    {
        _id: '1',
        title: 'RUC',
        pattern: '[0-9]{11,11}',
        message: 'Solo es posible ingresar valoes numericos, la cantidad debe ser de 11 digitos'
    },
    {
        _id: '2',
        title: 'Telefono',
        type: 'number'
    },
    {
        _id: '3',
        title: 'Direccion',
        pattern: '[a-zA-Z0-9 ]{5,100}',
        message: 'Valor minimo 5 caracteres y maximo 100 caracteres'
    },
    {
      _id: '4',
      value: 'Insertar',
      type: 'submit'
    }
]

export default class Clients extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    dataToPostSyntax(dataToConvert){
        const out = {
            name: dataToConvert[0].value,
            ruc: dataToConvert[1].value,
            telefono: dataToConvert[2].value,
            direccion: dataToConvert[3].value
        }
        return out
    }

    validateData(dataToCompare, data){
        if(data.name.charAt(data.name.length - 1) === ' '){
            alert('El ultimo caracter de nombre es un espacio')
            return false
        }
        return dataToCompare.map((item) =>{
            if(item.ruc === data.ruc){
                alert('El RUC correspondiente ya existe')
                return false
            }
            if(item.name === data.name){
                alert('El nombre correspondiente ya existe')
                return false
            }
        })[0]
    }

    constructData(data){
        return data.ruc + ' ' + data.name
    }

    handleSubmit(passData){
        return event => {
            event.preventDefault()
            const toPost = this.dataToPostSyntax(passData)
            axios.get(JSONBOX_URL + '/clients').then(res => {
                if(this.validateData(res.data, toPost) === undefined){
                    axios.post(JSONBOX_URL + '/clients', toPost).then(res => {
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
    render (){
        if(isAuth){
            return(
                <div style={{height: '100%'}}>
                    <Header>Clientes</Header>
                        <Content>
                            <ShowOrInsert table='clients' onDeploy={this.constructData}>
                                    <Form onSubmit={this.handleSubmit} initialData={data}/>
                                </ShowOrInsert>
                        </Content>
                    <NavBar></NavBar>
                </div>
            )
        }
        else{
            return <Redirect to='/'/>
        }
    }
}