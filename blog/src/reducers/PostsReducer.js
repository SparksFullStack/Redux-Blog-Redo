// dependencies
import _ from 'lodash';

// action types
import { FETCH_POSTS } from '../actions';

export const postsReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}