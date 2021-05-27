import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Users from '../pages/users';
import Clients from '../pages/clients';
import Products from '../pages/products';
import Invoices from '../pages/invoices';
import Stock from '../pages/stock';
import Login from '../pages/login';
import NotFound from '../pages/notFound.jsx';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path='/Usuarios' component={Users}/>
            <Route path='/Clientes' component={Clients}/>
            <Route path='/Productos' component={Products}/>
            <Route path='/Facturas' component={Invoices}/>
            <Route path='/Stock' component={Stock}/>
            <Route path='/Logout' component={Login}/>
            <Route path='/' component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default AppRouter;