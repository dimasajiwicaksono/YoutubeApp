import React, {Component} from 'react';
import Home from '../src/component/Home/Home'
import {Route, Switch, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './_Redux/_actions/api'
import SharePage from './component/SharePage/SharePage';

const API_KEY = 'AIzaSyBpVxoFY_RsF7Q0JD2c9bgK8Ib0yB-iZj8';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/share" component={SharePage}/>
        </Switch>
    
    );
  }
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };
    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));