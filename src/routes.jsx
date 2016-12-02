import React from 'react';
import { browserHistory, Route } from 'react-router';

import App from './components/App.js'
import MainLayout from './components/MainLayout.js';
import NotFoundPage from './components/NotFoundPage.jsx';

export default (
  <Route history={browserHistory} component={App} >
    <Route component={MainLayout} path='/'>
	    <Route path="*" status={404} component={NotFoundPage} />
	</Route>
  </Route>
)