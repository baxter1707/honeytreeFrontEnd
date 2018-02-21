import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  {Home}  from './components/Home'
import { BaseLayout } from './components/BaseLayout'
import ShopAll from './components/ShopAll'
import {AboutUs} from './components/AboutUs'
import HoneyJars from './components/HoneyJars'
import Candy from './components/Candy'
import Extras from './components/Extras'

import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));




ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <BaseLayout>
      <Switch>

        <Route path = '/ShopAll' component = {ShopAll} />
        <Route path = '/AboutUs' component = {AboutUs} />
        <Route path = '/HoneyJars' component = {HoneyJars} />
        <Route path = '/Candy' component = {Candy} />
        <Route path = '/Extras' component = {Extras} />
        <Route path = '/' component= {Home} />

      </Switch>
    </BaseLayout>
  </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
