import React from 'react'
import {secondaryBackgroudColor} from '../colors.js'
import InfiniteScroll from 'react-infinite-scroll-component'

const style = {
    contentStyle: {
        width: '100%',
        height: 'calc(100% - 8rem)',
        padding: '0',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    capsule:{
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingBottom: '2rem',
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
                <InfiniteScroll
                    dataLength={1}
                    height={'calc(100vh - 15rem)'}
                    style={style.capsule}
                >{this.props.children}</InfiniteScroll>
            </div>
        )
    }
}