import React from 'react';
import App from './containers/App.jsx'
import MainLayout from './containers/layouts/MainLayout.jsx';
import NotFoundPage from './containers/NotFoundPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './containers/Login.jsx';

import { browserHistory, Route, Redirect } from 'react-router';

export default (
    <Route history={browserHistory} component={App} >
        <Route component={Header} path='/'>
            <Route component={Login} path='/login' />
    		<Route path="*" status={404} component={NotFoundPage}/>
        </Route>
        <Route component={Footer} path='/'>
    </Route>
)