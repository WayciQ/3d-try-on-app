import React, { Component,Suspense } from 'react';
import { Router, Route, Switch,BrowserRouter } from 'react-router-dom';
import { history } from '../_helpers/history';
import ErrorBoundary from '../_helpers/ErrorBoundary';
// const TryOnPage = withRouter(lazy(() => import('./TryOnPage')));
// const ModelManagerPage = withRouter(lazy(() => import('../pages/ModelManagerPage')));
import {TryOnPage} from './TryOnPage';
import {ModelManagerPage} from './ModelManagerPage';
import { Blank } from './Blank';
export default class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <TryOn onReady={this.ready}/> */}
        <Router history={history}>
          <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                  <Switch>
                    <Route exact path='/' component={TryOnPage} />
                    <Route exact path='/TryOnPage' component={TryOnPage} />
                    <Route exact path='/ModelManagerPage' component={ModelManagerPage} />
                    <Route exact path='/Blank' component={Blank} />
                  </Switch>
                </BrowserRouter>
              </Suspense>
          </ErrorBoundary>
        </Router>
      </div>
    );
  }
  
}