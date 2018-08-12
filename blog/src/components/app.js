// dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components to import
import PostsIndex from './PostsIndex';
import NewPost from './NewPost';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={PostsIndex} />
        <Route path='/posts/new' component={NewPost} />
      </div>
    );
  }
}
