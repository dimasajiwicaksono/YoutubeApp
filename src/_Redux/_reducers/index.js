import { combineReducers } from 'redux'
import videosReducer from './video';
import apiReducer from './api';

export default combineReducers ({
    videos : videosReducer,
    api : apiReducer,

});