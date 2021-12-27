import React from 'react';
import CustomLink from '../component/link';
import Users from '../icons/users.svg';
import Client from '../icons/client.svg';
import Product from '../icons/product.svg';
import Invoice from '../icons/invoice.svg';
import Stock from '../icons/stock.svg';
import Logout from '../icons/logout.svg';
import { useMediaQuery } from 'react-responsive'
import {secondaryBackgroudColor} from '../colors.js';
import InfiniteScroll from 'react-infinite-scroll-component'

const desktopStyle = {
    navBar: {
        position: 'fixed',
        backgroundColor: secondaryBackgroudColor,
        width: '11.5rem',
        height: 'calc(100% - 2rem)'
    },
    navBarNav: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}

const mobileStyle = {
    navBar: {
        bottom: '0',
        backgroundColor: secondaryBackgroudColor,
        width: '100vw',
        position: 'fixed',
        height: '5rem'
    },
    navBarNav: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
    },
}

function Navbar(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 700px)'
    })
    let inStyle = mobileStyle
    if(isDesktopOrLaptop){
        inStyle = desktopStyle
    }
    return(
        <InfiniteScroll height={inStyle.navBar.height} dataLength={8} style={inStyle.navBar}>
            <ul style={inStyle.navBarNav}>
                <h2 style={{textAlign:'center', margin:'0', marginTop:'1.5rem'}}>Bienvenido</h2>
                <CustomLink icon={Users}>Usuarios</CustomLink>
                <CustomLink icon={Client}>Clientes</CustomLink>
                <CustomLink icon={Product}>Productos</CustomLink>
                <CustomLink icon={Invoice}>Facturas</CustomLink>
                <CustomLink icon={Stock}>Stock</CustomLink>
                <CustomLink icon={Logout}>Logout</CustomLink>
            </ul>
        </InfiniteScroll>
    )
}

export default Navbar