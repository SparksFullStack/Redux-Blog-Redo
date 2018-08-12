// dependencies
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components to import
import PostsIndex from './PostsIndex';
import NewPost from './NewPost';
import ViewPost from './ViewPost';
import EditPost from './EditPost';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path='/' exact component={PostsIndex} />
        <Route path='/posts/new' exact component={NewPost} />
        <Route path='/posts/:id' exact component={ViewPost} />
        <Route path='/posts/editpost/:id' exact component={EditPost} />
        </Switch>
      </div>
    );
  }
}
