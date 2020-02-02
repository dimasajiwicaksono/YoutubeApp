import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from '../src/_Redux/configureStore'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/free-solid-svg-icons';

import Home from './component/Home/Home';
import SharePage from './component/SharePage/SharePage';

const store = configureStore ();

ReactDOM.render(
            // <-- connect to html page -->
            <Provider store = {store}>
            <Router>
                <Switch>
                    <Route exact path = '/' component = {Home} />
                    <Route path = '/share' component = {SharePage} />
                </Switch>
            </Router>
            </Provider>
            
, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



