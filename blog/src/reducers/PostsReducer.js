// action types
import { FETCH_POSTS } from '../actions';

export const postsReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_POSTS:
            return action.payload.data;
        default:
            return state;
    }
}