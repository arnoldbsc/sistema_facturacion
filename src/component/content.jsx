import React from 'react'
import {secondaryBackgroudColor} from '../colors.js';

const style = {
    contentStyle: {
        width: '100%',
        height: '80vh',
        padding: '0',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        scrollBehavior: 'auto'
    },
    capsule:{
        padding: '2rem',
        paddingBottom: '4rem',
        borderStyle: 'solid',
        borderWidth: '0.3rem',
        borderRadius: '3rem',
        borderColor: secondaryBackgroudColor
    }
}

export default class Content extends React.Component{
    render() {
        return (
            <div style={style.contentStyle}>
                <div style={style.capsule}>{this.props.children}</div>
            </div>
        )
    }
}