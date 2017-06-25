import React from 'react';

import { Router, Route, browserHistory } from 'react-router';
import { /*routerActions,*/ syncHistoryWithStore } from 'react-router-redux';
// import { UserAuthWrapper } from 'redux-auth-wrapper'

// import { getUser } from './reducers';

import RegisteringView from './components/views/registering';
// import LoginView from './components/login';
// import NotFoundView from './components/notFound';
// import SearchView from './components/search';
// import CriminalDetailView from './components/criminal';

// const UserIsAuthenticated = UserAuthWrapper({
//   authSelector: getUser,
//   redirectAction: routerActions.replace,
//   failureRedirectPath: '/',
//   wrapperDisplayName: 'UserIsAuthenticated'
// });

const configRouter = (store) => {
  const history = syncHistoryWithStore(browserHistory, store);

  return () =>
    <Router history={ history }>
      <Route path="/" component={ RegisteringView }></Route>
    </Router>
      // <Route
      //   path="/criminal/:criminalId"
      //   component={ UserIsAuthenticated(CriminalDetailView) }></Route>
      // <Route path="*" component={ NotFoundView } ></Route>
}

export default configRouter;
