import React from 'react';
import App from './containers/App.jsx'
import MainLayout from './containers/layouts/MainLayout.jsx';
import NotFoundPage from './containers/NotFoundPage.jsx';
import Venues from './containers/Venues.jsx';
import VenueCard from './containers/VenueCard.jsx';
import Artists from './containers/Artists.jsx';
import ArtistCard from './containers/ArtistCard.jsx';
import ProjectCard from './containers/ProjectCard.jsx';
import ProgramCard from './containers/ProgramCard.jsx';
import PaymentFailure from './components/PaymentFailure.jsx';
import PaymentSuccess from './components/PaymentSuccess.jsx';
import Login from './containers/Login.jsx';

import { browserHistory, Route, Redirect } from 'react-router';

export default (
    <Route history={browserHistory} component={App} >
    	<Redirect from='/' to='/venues' />
        <Route component={MainLayout} path='/'>
            <Route component={Venues} path='/venues' />
            <Route component={Artists} path='/artists' />
            <Route component={ArtistCard} path='/artist/:id' >
                <Route component={ProjectCard} path='/artist/:id/project/:projectId' />
                <Route component={ProgramCard} path='/artist/:id/program/:programId' />
            </Route>
            <Route component={VenueCard} path='/venue/:id'>
            	<Route component={ProjectCard} path='/venue/:id/project/:projectId' />
            </Route>
            <Route component={PaymentSuccess} path='/payment-success' />
            <Route component={PaymentFailure} path='/payment-failure' />
            <Route component={Login} path='/login' />
    		<Route path="*" status={404} component={NotFoundPage}/>
        </Route>
    </Route>
)