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

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: props.initialData};
    }

    render() {
        const listItems = this.props.initialData.map((deployData) =>
            <div key={deployData._id}>
                <h4 style={style.title}>{deployData.title}</h4>
                <input onChange={(event) => {
                        this.setState({data: {...this.state.data, [deployData._id]:{...this.state.data[deployData._id], value: event.target.value}}})
                    }} 
                    type={deployData.type}
                    pattern={deployData.pattern}
                    title= {deployData.message}
                    style={style.textBox}
                    value={deployData.value}
                    required={'required'}>
                </input>
            </div>
        );
        return (
            <form onSubmit={this.props.onSubmit(this.state.data)}>{listItems}</form>
        );
    }
}