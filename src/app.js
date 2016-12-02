import React        from 'react';
import { render } 	from 'react-dom'
import { Provider } from 'react-redux';
import { Router }   from 'react-router';

import './css/reset.css';
import configureStore from './store/configureStore';
import routes         from './routes.jsx';
import history        from './history.js';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);
const rootElement =  document.getElementById('root')

if (process.env.NODE_ENV === `development`) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  console.log("12345"); 
}

render(
    <Provider store={store}>
    	<Router children={routes}  />
    </Provider>,
   rootElement
)