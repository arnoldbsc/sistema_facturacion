import React from 'react';
import Header from '../component/header';
import NavBar from '../component/navBar';
import Content from '../component/content';
import ShowOrInsert from '../component/showOrInsert'
import Form from '../component/form';
import axios from 'axios'
import { Navigate } from 'react-router'
import {isAuth, JSONBOX_URL} from './authData';

const data = [
    {
        _id: '0',
        title: 'Numero de Factura',
        pattern: '[0-9]{1,10}',
        message: 'Solo es posible ingresar valoes numericos, el valor maximo es de 10 digitos'
    },
    {
        _id: '1',
        title: 'Cliente',
        pattern: '[a-zA-Z ]{5,50}',
        message: 'Solo es posible ingresar letras mas no numeros, minimo 5 caracteres y maximo 50 caracteres'
    },
    {
        _id: '2',
        title: 'Fecha',
        type: 'date'
    },
    {
        _id: '3',
        title: 'Total',
        pattern: '[0-9]+([,.][0-9]+)?',
        message: 'Solo es posible ingresar valoes numericos decimales'
    },
    {
        _id: '4',
        value: 'Insertar',
        type: 'submit'
    }
]

export default class Products extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            showItems: 0
        }
    }
    dataToPostSyntax(dataToConvert){
        const out = {
            number: dataToConvert[0].value,
            client: dataToConvert[1].value,
            date: dataToConvert[2].value,
            total: dataToConvert[3].value
        }
        return out
    }

    validateData(dataToCompare, data){
        if(data.client.charAt(data.client.length - 1) === ' '){
            alert('El ultimo caracter de cliente es un espacio')
            return false
        }
        let out = true
        dataToCompare.map(item =>{
            if(item.number.toString()  === data.number){
                alert('El numero de factura correspondiente ya existe')
                out = false
                return false
            }
        })
        return out
    }

    constructData(data){
        return data.number + ' ' + data.client
    }
    
    handleSubmit(passData){
        return event => {
            event.preventDefault()
            const toPost = this.dataToPostSyntax(passData)
            if(new Date(toPost.date) <= new Date()){
                axios.get(JSONBOX_URL + '/invoices').then(res => {
                    if(this.validateData(res.data, toPost) !== false){
                        axios.post(JSONBOX_URL + '/invoices', toPost).
                        then(res => {
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
            else{
                alert('Es necesario que la fecha sea anterior o igual a la actual')
            }
        }
    }
    render() {
        if(isAuth){
            return(
                <div>
                    <Header>Facturas</Header>
                        <Content>
                            <ShowOrInsert table='invoices' onDeploy={this.constructData}>
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