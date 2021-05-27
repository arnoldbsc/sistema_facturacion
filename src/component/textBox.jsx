import React from 'react'
import {secondaryBackgroudColor, primaryBackgroudColor} from '../colors'

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



export default class TextBox extends React.Component{
    render(){
        return(
            <div>
                <h4 style={style.title}>{this.props.children}</h4>
                <input onChange={this.props.onChangeValue} style={style.textBox} type="text"/> 
            </div>
        )
    }
}