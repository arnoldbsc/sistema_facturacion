import React from 'react';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import {fontSecondaryColor} from '../colors.js';

const style = {
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '5rem',
        color: fontSecondaryColor,
        textDecoration: 'none'
    },
    icon: {
        wigth: '2rem',
        minHeight: '2rem',
        maxWidth: '2rem',
        margin: '0 1rem'
    }
}

function CustomLink (props){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 700px)'
    })
    let textDisplay = 'none'
    if(isDesktopOrLaptop){
        textDisplay = 'inline'
    }
    return(
        <li style={{width: '100%'}}>
            <Link style={style.link} to={props.children}>
                <img style={style.icon} src={props.icon} alt="Bar"/>
                <span style={{display: textDisplay}}>{props.children}</span>
            </Link>
        </li>
    )
}

export default CustomLink