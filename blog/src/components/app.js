// dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components to import
import PostsIndex from './PostsIndex';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={PostsIndex} />
      </div>
    );
  }
}
