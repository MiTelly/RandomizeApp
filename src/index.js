import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Letters from './Letters';
import Numbers from './Numbers';
import Colors from './Colors';
import NotFound from './NotFound';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute path="Colors" component={Colors} />
      <Route path="Colors" component={Colors}/>
      <Route path="Numbers" component={Numbers}/>
      <Route path="Letters" component={Letters}/>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'));
