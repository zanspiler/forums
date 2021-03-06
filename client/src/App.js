import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import Frontpage from './components/Frontpage';
import ForumPage from './components/forum/ForumPage';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Communities from './components/forum/Communities';
import PostPage from './components/post/PostPage';
import CreatePost from './components/post/CreatePost';
import CreateForum from './components/forum/CreateForum';
import MyForums from './components/forum/MyForums';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import NotFound from './components/NotFound';
import Following from './components/forum/Following';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/communities" component={Communities} />
            <Route exact path="/f/:forumName" component={ForumPage} />
            <Route exact path="/f/:forumName/:postId" component={PostPage} />
            <Route
              exact
              path="/f/:forumName/posts/create"
              component={CreatePost}
            />
            <Route exact path="/create-forum" component={CreateForum} />
            <Route exact path="/my-forums" component={MyForums} />
            <Route exact path="/following" component={Following} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
