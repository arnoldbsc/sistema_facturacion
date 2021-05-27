import React from 'react';
import Header from '../component/header';
import NavBar from '../component/navBar';
import Content from '../component/content';
import Form from '../component/form';

const data = [
    {
        _id: '0',
        title: 'Numero de Factura',
        type: 'number'
    },
    {
        _id: '1',
        title: 'Cliente'
    },
    {
        _id: '2',
        title: 'Fecha',
        type: 'date'
    },
    {
        _id: '3',
        title: 'Total',
        type: 'number'
    }
]

export default class Products extends React.Component{
    render() {
        return(
            <div>
                <Header>Facturas</Header>
                    <Content>
                        <Form initialData={data}/>
                    </Content>
                <NavBar></NavBar>
            </div>
        )
    }
}