import React from 'react';
import Header from '../component/header';
import NavBar from '../component/navBar';
import Content from '../component/content';
import Form from '../component/form';

const data =[
    {
        _id: '0',
        title: 'Nombre'
    },
    {
        _id: '1',
        title: 'ID',
        type: 'number'
    },
    {
        _id: '2',
        title: 'Descripcion'
    },
    {
        _id: '3',
        title: 'Precio Unitario',
        type: 'number'
    },
    {
        _id: '4',
        title: 'Stock Inicial',
        type: 'number'
    }
]

export default class Products extends React.Component{
    render() {
        return(
            <div>
                <Header>Productos</Header>
                    <Content>
                        <Form initialData={data}/>
                    </Content>
                <NavBar></NavBar>
            </div>
        )
    }
}