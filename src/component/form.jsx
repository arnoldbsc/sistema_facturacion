import React from 'react'
import {secondaryBackgroudColor, primaryBackgroudColor} from '../colors'

const inline = 'https://jsonbox.io/box_3fad829cf86d1069c94d'

const style = {
    textBox: {
        width: '100%',
        fontSize: '1.1rem',
        outline: '0',
        borderWidth: '0 0 2px',
        borderColor: secondaryBackgroudColor
    },
    title:{
        color: primaryBackgroudColor
    }
}

export default class Form extends React.Component{
    render(){
        const listItems = this.props.initialData.map((data) =>
        <div key={data._id}>
            <h4 style={style.title}>{data.title}</h4>
            <input type={data.type} style={style.textBox} value={data.value}></input>
        </div>
        );
        return (
            <form action={'/'}>{listItems}</form>
        );
    }
}