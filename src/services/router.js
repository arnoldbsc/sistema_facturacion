import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
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
        <Routes>
            <Route exact path='/Usuarios' element={<Users/>}/>
            <Route exact path='/Clientes' element={<Clients/>}/>
            <Route exact path='/Productos' element={<Products/>}/>
            <Route exact path='/Facturas' element={<Invoices/>}/>
            <Route exact path='/Stock' element={<Stock/>}/>
            <Route exact path='/Logout' element={<Login/>}/>
            <Route exact path='/' element={<Login/>}/>
            <Route path='+' element={<NotFound/>}/>
        </Routes>
    </Router>
);

export default AppRouter;