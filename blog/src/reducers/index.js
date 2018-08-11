// dependencies
import { combineReducers } from 'redux';

// reducers
import { postsReducer } from './PostsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
