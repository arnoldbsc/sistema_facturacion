import React from 'react';
import Header from '../component/header';
import NavBar from '../component/navBar';
import Content from '../component/content';

export default class Products extends React.Component{
    render() {
        return(
            <div>
                <Header>Stock</Header>
                    <Content>
                        <p>Tabla de los productos</p>
                    </Content>
                <NavBar></NavBar>
            </div>
        )
    }
}