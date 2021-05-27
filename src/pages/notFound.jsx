import React from 'react'
import {Link} from 'react-router-dom'
export default class NotFound extends React.Component{
    render() {
        return(
            <div>
                <h1>Page Not Found</h1>
                <h2>Error 404</h2>
                <Link to='/Clientes'>Back to Clients</Link>
            </div>
        )
    }
}