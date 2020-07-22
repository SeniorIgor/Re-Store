import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from './../pages';
import ShopHeader from './../shop-header';

import './app.css';

const App = () => {

  return (
    <main role="main" className="container">
    <div>
        <ShopHeader numItems={5} total={210} />
        <Switch>
          <Route 
            path="/" 
            component={ HomePage }
            exact />
          <Route 
            path="/cart" 
            component={ CartPage }/>
        </Switch>
      </div>
    </main>
  );
}

export default App;