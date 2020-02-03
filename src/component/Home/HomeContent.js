import React from 'react';
import {getMostPopularVideos} from '../../_Redux/_reducers/video'
import {connect} from 'react-redux';

import VideoList from '../Content/VideoList'

const AMOUNT_TRENDING_VIDEOS = 12;

export class HomeContent extends React.Component {
  render() {
    const trendingVideos = this.getTrendingVideos();
    console.log(trendingVideos);

    return (
        <div className='home-content'>
            {trendingVideos.map(video => 
            <VideoList 
                id ={video.id}
                title = {video.snippet.title}
                description = {video.snippet.description}
            />
            )}
        </div>
    );
}

    getTrendingVideos() {
    return this.props.mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS);   
}
}

function mapStateToProps(state) {
  return {
    mostPopularVideos: getMostPopularVideos(state),
  };
}
export default connect(mapStateToProps, null)(HomeContent);