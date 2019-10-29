import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './domains/static/home/Home';
import NotFound from './domains/static/not-found/NotFound';
import PostsList from './domains/posts/list/PostsList';
import UsersList from './domains/users/list/UsersList';
import PostDetail from './domains/posts/detail/PostDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/posts" component={PostsList} />
        <Route path="/users" component={UsersList} />
        <Route render={() => <NotFound />} />
      </Switch>
    </Router>
  );
};

export default hot(module)(App);
