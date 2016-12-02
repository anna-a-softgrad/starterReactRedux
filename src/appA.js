import React        from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router }   from 'react-router';
import fetch        from 'isomorphic-fetch';
import cookie       from 'cookie';

import configureStore from '../shared/store/configureStore';
import routes         from '../shared/routes.jsx';
import history        from '../shared/history.js';
import './mystyles.css';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);
const rootElement =  document.getElementById('react-view')

render(
    <Provider store={store}>
    	<Router children={routes} history={history} />
    </Provider>,
   rootElement
)