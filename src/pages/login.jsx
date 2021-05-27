import React from 'react'
import Content from '../component/content'
import LoginIcon from '../icons/login.svg'
import { Link } from "react-router-dom";
import Form from '../component/form'

const style = {
    link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'black',
        marginTop: '2rem',
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    icon: {
        wigth: '1.5rem',
        minHeight: '1.5rem',
        maxWidth: '1.5rem',
        margin: '0 1rem'
    }
}

const data = [
    {
        _id: '0',
        title: 'Usuario',
    },
    {
        _id: '1',
        title: 'Contraseña',
        type: 'password'
    }
]

export default class Login extends React.Component{
    render() {
        return (
            <Content>
                <Form initialData={data}/>
                <Link style={style.link} to='/Usuarios'>
                    Ingresar
                    <img style={style.icon} src={LoginIcon} alt="Login" />
                </Link>
            </Content>
        )
    }
}