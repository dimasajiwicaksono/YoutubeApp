import { VIDEO_LIST } from '../_actions/video'
import { SUCCESS } from '../_actions'

export const initialState = {
    byId : {},

};

export default function videos(state=initialState, action) {
    switch (action.type) {
        // case VIDEO_LIST [SUCCESS] :
        //     return 
        default :
        return state;
    }
}