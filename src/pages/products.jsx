import React from 'react';
import Header from '../component/header';
import NavBar from '../component/navBar';
import Content from '../component/content';
import Form from '../component/form';
import ShowOrInsert from '../component/showOrInsert'
import axios from 'axios'
import { Navigate } from 'react-router'
import {isAuth, JSONBOX_URL} from './authData';

const data =[
    {
        _id: '0',
        title: 'Nombre',
        pattern: '[a-zA-Z0-9 ]{5,20}',
        message: 'Solo es posible ingresar letras y numeros mas no caracteres, minimo 5 caracteres y maximo 20 caracteres'
    },
    {
        _id: '1',
        title: 'ID',
        pattern: '[0-9]{0,10}',
        message: 'Solo es posible ingresar valoes numericos, el valor maximo es de 10 digitos'
    },
    {
        _id: '2',
        title: 'Descripcion',
        pattern: '[a-zA-Z0-9 ]{5,100}',
        message: 'Solo es posible ingresar letras mas no numeros, minimo 5 caracteres y maximo 100 caracteres'
    },
    {
        _id: '3',
        title: 'Precio Unitario',
        pattern: '[0-9]+([,.][0-9]+)?',
        message: 'Solo es posible ingresar valoes numericos decimales'
    },
    {
        _id: '4',
        title: 'Stock Inicial',
        pattern: '[0-9]{0,10}',
        message: 'Solo es posible ingresar valoes numericos, el valor maximo es de 10 digitos'
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    dataToPostSyntax(dataToConvert){
        const out = {
            name: dataToConvert[0].value,
            code: dataToConvert[1].value,
            description: dataToConvert[2].value,
            unitPrice: dataToConvert[3].value,
            initialStock: dataToConvert[4].value
        }
        return out
    }
    validateData(dataToCompare, data){
        if(data.name.charAt(data.name.length - 1) === ' '){
            alert('El ultimo caracter de cliente es un espacio')
            return false
        }
        let out
        dataToCompare.map(item =>{
            if(item.name  === data.name){
                alert('El nombre correspondiente ya existe')
                out = false
                return false
            }
            if(item.code.toString()  === data.code){
                alert('El id correspondiente ya existe')
                out = false
                return false
            }
        })
        return out
    }

    constructData(data){
        return data.code + ' ' + data.name
    }
    
    handleSubmit(passData){
        return event => {
            event.preventDefault()
            const toPost = this.dataToPostSyntax(passData)
            axios.get(JSONBOX_URL + '/products').then(res => {
                if(this.validateData(res.data, toPost) !== false){
                    axios.post(JSONBOX_URL + '/products', toPost).then(res => {
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
                    <Header>Productos</Header>
                        <Content>
                            <ShowOrInsert table='products' onDeploy={this.constructData}>
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