import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import Restoservice from './services/resto-service';
import RestoServiceContex from './components/resto-service-context';
import store from './store'

import './index.scss';
// import { Component } from 'react';


const restoService = new Restoservice();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContex.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContex.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

