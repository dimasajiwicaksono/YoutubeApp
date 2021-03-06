import { MOST_POPULAR } from '../_actions/video'
import { SUCCESS } from '../_actions'
import {createSelector} from 'reselect';

export const initialState = {
    byId : {},
    mostPopular : {},

};

export default function videos(state=initialState, action) {
    switch (action.type) {
        case MOST_POPULAR[SUCCESS]:
            return reduceFetchMostPopularVideos(action.response, state);
        default :
          return state;
    }
}


function reduceFetchMostPopularVideos(response, prevState) {
    const videoMap = response.items.reduce((accumulator, video) => {
      accumulator[video.id] = video;
      return accumulator;
    }, {});
  
    let items = Object.keys(videoMap);
    if (response.hasOwnProperty('prevPageToken') && prevState.mostPopular) {
      items = [...prevState.mostPopular.items, ...items];
    }
  
    const mostPopular = {
      totalResults: response.pageInfo.totalResults,
      nextPageToken: response.nextPageToken,
      items,
    };
  
    return {
      ...prevState,
      mostPopular,
      byId: {...prevState.byId, ...videoMap},
    };
  }

const getMostPopular = (state) => state.videos.mostPopular;
export const getMostPopularVideos = createSelector(
  (state) => state.videos.byId,
  getMostPopular,
  (videosById, mostPopular) => {
    if (!mostPopular || !mostPopular.items) {
      return [];
    }
    return mostPopular.items.map(videoId => videosById[videoId]);
  }
);
