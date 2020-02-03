import {fork, take } from 'redux-saga/effects';
import { REQUEST } from '../_actions'
import * as api from '../_apis/youtube-api';
import * as videoAction from '../_actions/video'
import {fetchEntity} from './index'

export function* fetchMostPopularVideos(amount, loadDescription, nextPageToken) {
  const request = api.buildMostPopularVideosRequest.bind(null, amount, loadDescription, nextPageToken);
  yield fetchEntity(request, videoAction.mostPopular);
}

export function* watchMostPopularVideos() {
  while (true) {
    const {amount, loadDescription, nextPageToken} = yield take(videoAction.MOST_POPULAR[REQUEST]);
    yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
  }
}