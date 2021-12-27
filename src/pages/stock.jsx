import React from 'react';
import Header from '../component/header';
import NavBar from '../component/navBar';
import Content from '../component/content';
import axios from 'axios';
import { Redirect } from 'react-router'
import {isAuth, JSONBOX_URL} from './authData';

export default class Products extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: false};
    }

    converData(dataToConvert){
        const out = dataToConvert
        return out
    }

    componentDidMount(){
        axios.get(JSONBOX_URL + '/products').then(res => {
            this.setState({data: this.converData(res.data)})
        })
    }
    render() {
        if(isAuth){
            if(!this.state.data){
                return(
                    <div>
                        <Header>Stock</Header>
                            <Content><p>Charging</p></Content>
                        <NavBar></NavBar>
                    </div>
                )
            }
            else{
                const listItems = this.state.data.map((deployData) =>
                    <div style={{display: 'flex', flexDirection: 'row'}} key={deployData.id}>
                        <p>{deployData.id} - {deployData.name} - {deployData.initialStock}</p>
                    </div>
                );
                return(
                    <div>
                        <Header>Stock</Header>
                            <Content>Id - Nombre - Stock Actual{listItems}</Content>
                        <NavBar></NavBar>
                    </div>
                )
            }
        }
        else{
            return <Redirect to='/'/>
        }
    }
}