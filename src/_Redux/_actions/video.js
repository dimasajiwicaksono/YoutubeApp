import { createAction, createRequestTypes, REQUEST, SUCCESS, FAILURE } from '../_actions/index';

export const VIDEO_LIST = createRequestTypes('VIDEO_LIST');
export const video = {
    request: () => createAction(VIDEO_LIST[REQUEST]),
    success: (response) => createAction(VIDEO_LIST[SUCCESS], {response}),
    failure: (response) => createAction(VIDEO_LIST[FAILURE], {response}),
};