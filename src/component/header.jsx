import React from 'react'
import {primaryBackgroudColor, fontPrimaryColor} from '../colors.js';

const style = {
    bar:{
        paddingTop: '0.5%',
        paddingBottom: '0.5%',
        paddingLeft: '1%',
        paddingRight: '1%',
        backgroundColor: primaryBackgroudColor,
        color: fontPrimaryColor,
        fontSize: '2rem',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        width: '100%',
        textAlign: 'center'
    }
}

export default class Header extends React.Component{
    render() {
        return(
            <div style={style.bar}>
                <div style={style.title}>{this.props.children}</div>
            </div>
        )
    }
}