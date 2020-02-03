import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from '../src/_Redux/configureStore'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/free-solid-svg-icons';

import App from './App'


const store = configureStore ();

ReactDOM.render(
            // <-- connect to html page -->
            <Provider store = {store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
            
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



