import React from 'react';
import Header from '../component/header'
import NavBar from '../component/navBar'
import Content from '../component/content'
import Form from '../component/form';

const data = [
    {
      _id: '0',
      title: 'Nombre'
    },
    {
      _id: '1',
      title: 'RUC',
      type: 'number'
    },
    {
      _id: '2',
      title: 'Telefono',
      type: 'number'
    },
    {
      _id: '3',
      value: 'Insertar',
      type: 'submit'
    }
]

export default class Clients extends React.Component{
    render (){
        return(
            <div style={{height: '100%'}}>
                <Header>Clientes</Header>
                <Content>
                    <Form initialData={data}/>
                </Content>
                <NavBar></NavBar>
            </div>
        )
    }
}