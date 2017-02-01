import React        from 'react';
import { render } 	from 'react-dom'
import { Provider } from 'react-redux';
import { Router }   from 'react-router';

import thunk from 'redux-thunk';

import configureStore from './store/configureStore';
import routes         from './routes.jsx';
import { browserHistory } from 'react-router'

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);
const rootElement =  document.getElementById('root')

const middlewares = [thunk];

if (NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
  console.log("12345"); 
}

render(
    <Provider store={store}>
    	<Router children={routes} history={browserHistory} />
    </Provider>,
   rootElement
)