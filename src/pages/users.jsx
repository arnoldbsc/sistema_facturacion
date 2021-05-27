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
        title: 'DNI',
        type: 'number'
    },
    {
        _id: '2',
        title: 'Email',
        type: 'email'
    },
    {
        _id: '3',
        title: 'Puesto'
    }
]

export default class Products extends React.Component{
    render() {
        return(
            <div>
                <Header>Usuarios</Header>
                    <Content>
                        <Form initialData={data}/>
                    </Content>
                <NavBar></NavBar>
            </div>
        )
    }
}