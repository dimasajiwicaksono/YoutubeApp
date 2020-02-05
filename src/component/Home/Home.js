import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as videoAction from '../../_Redux/_actions/video';
import { bindActionCreators } from 'redux';
import {getYoutubeLibraryLoaded} from '../../_Redux/_reducers/api';


import HomeContent from './HomeContent'
import Header from '../NavBar/Header';


export class Home extends Component {
    
    componentDidMount() {
        if (this.props.youtubeLibraryLoaded) {
          this.props.fetchMostPopularVideos();
        }
      }
    
      componentDidUpdate(prevProps) {
        if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
          this.props.fetchMostPopularVideos();
        }
      }
    

    render() {
        return (
            <div>
                <Header />
                <HomeContent />
          
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    };
  }
  
  function mapDispatchToProps(dispatch) {
    const fetchMostPopularVideos = videoAction.mostPopular.request;
    return bindActionCreators({fetchMostPopularVideos}, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)

