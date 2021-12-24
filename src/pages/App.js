import React, { Component,Suspense } from 'react';
import { Router, Route, Switch,BrowserRouter ,Redirect } from 'react-router-dom';
import { history } from '../_helpers/history';
import ErrorBoundary from '../_helpers/ErrorBoundary';
import {TryOnPage} from './TryOnPage';
import {ModelManagerPage} from './ModelManagerPage';
export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                  <Switch>
                    <Route exact path='/TryOnPage' component={TryOnPage} />
                    <Route exact path='/ModelManagerPage' component={ModelManagerPage} />
                    <Route path='/' >
                        <Redirect to='TryOnPage'></Redirect>
                    </Route>
                  </Switch>
                </BrowserRouter>
              </Suspense>
          </ErrorBoundary>
        </Router>
      </div>
    );
  }
}