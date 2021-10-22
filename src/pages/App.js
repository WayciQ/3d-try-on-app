import React, { Component,lazy,Suspense } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { history } from '../_helpers/history';
import ErrorBoundary from '../_helpers/ErrorBoundary'
const TryOnPage = withRouter(lazy(() => import('./TryOnPage')));
const ModelManagerPage = withRouter(lazy(() => import('../pages/ModelManagerPage')));
export default class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <TryOn onReady={this.ready}/> */}
        <Router history={history}>
          <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path='/' component={TryOnPage} />
                  <Route path='/ModelManagerPage' component={ModelManagerPage} />
                </Switch>
              </Suspense>
          </ErrorBoundary>
        </Router>
      </div>
    );
  }
  
}