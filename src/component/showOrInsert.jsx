import React from 'react'
import axios from 'axios'
import { JSONBOX_URL } from '../pages/authData';
import Delete from '../icons/delete.svg'
import {primaryBackgroudColor, fontPrimaryColor} from '../colors'

const style = {
    deleteButton: {
        marginRight: '1rem',
        padding:'0.5rem',
        backgroundColor: '#F96C6C',
        fontWeight: 'bold',
        borderRadius: '1rem',
        border: 'none',
        height: '3rem'
    },
    container: {
        paddingTop: '1rem',
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        border: 'none',
        marginTop: '1rem',
        fontSize:'1.1rem',
        padding: '1rem',
        fontWeight: 'bold',
        color: fontPrimaryColor,
        backgroundColor: primaryBackgroudColor
    },
    icon: {
        height: '100%'
    }
}

export default class ShowOrInsert extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.itemsToShow = this.itemsToShow.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            data: false,
            showItems: 0
        }
    }

    handleClick(e){
        this.setState({showItems: e.target.id})
    }

    handleDelete(table){
        return e => {
            axios.delete(JSONBOX_URL + '/' + table + '/' + e.target.id).then(res => {
                if(res.status === 200){
                    alert('Se elimino con exito')
                    this.itemsToShow(table)
                }
                else{
                    alert('No se pudo eliminar')
                }
            })
        }
    }

    inserOrShow(){
        return(
            <div style={{display:'flex', flexDirection:'column', height:'100%', justifyContent: 'center'}}>
                <button id={1} onClick={this.handleClick} style={style.button}>Insertar datos</button>
                <button id={2} onClick={this.handleClick} style={style.button}>Visualizar datos</button>
            </div>
        )
    }

    itemsToShow(table){
        return axios.get(JSONBOX_URL + '/' + table).then(res =>{
            if(res.status === 200){
                this.setState({data: res.data})
            }
        })
    }

    render(){
        let toRetunRender
        if(this.state.showItems === 0){
            toRetunRender = this.inserOrShow()
        }
        else if(this.state.showItems === '1'){
            toRetunRender = this.props.children
        }
        else if(this.state.showItems === '2'){
            if(!this.state.data){
                toRetunRender = <p>Loading...</p>
                this.itemsToShow(this.props.table)
            }
            else{
                toRetunRender = this.state.data.map((deployData) =>
                    <div>
                        <div style={style.container} key={deployData.id}>
                            <button style={style.deleteButton}><img onClick={this.handleDelete(this.props.table)} id={deployData.id} style={style.icon} src={Delete} alt="delete" /></button>
                            <p>{this.props.onDeploy(deployData)}</p>
                        </div>
                    </div>
                );
            }
            
        }
        return(toRetunRender)
    }
}