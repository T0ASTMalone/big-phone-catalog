
import './App.css';
import { Switch, Route } from 'react-router';
import React from 'react';
import Header from './components/Header/Header';
import Catalog from './routes/Catalog/Catalog';
import Checkout from './routes/Checkout/Checkout';
import { Redirect } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        {/* Header */}
        <Header/>

        {/* Handles routing in app */}
        <Switch>
          <Route exact path="/">
              <Redirect to="/big-phone-catalog" />
          </Route>
          {/* Catalog */}
          <Route exact path="/big-phone-catalog" component={Catalog}/>
          {/* Checkout */}
          <Route path="/big-phone-catalog/checkout" component={Checkout}/>
        </Switch>
      </div>

  );
}

export default App;
