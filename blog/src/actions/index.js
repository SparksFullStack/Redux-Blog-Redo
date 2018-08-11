// dependencies
import axios from 'axios';

// action types
export const FETCH_POSTS = 'fetch_posts';

// credentials
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=charlie1234';

// action creators
export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
};