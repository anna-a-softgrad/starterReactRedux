import React, { Component, PropTypes } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

export default class MainLayout extends Component {

    render() {
        const {children } = this.props;

        return (
            <div>
              <div className="wrapper">
                <Header/>
                  <div className="container main-container">
                      {children}
                  </div>
                </div>
              <Footer/>
            </div>
        );

    }
}

MainLayout.propTypes = {
    children : PropTypes.object
};