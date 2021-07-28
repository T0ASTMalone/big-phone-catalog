
import './App.css';
import { Switch, Route } from 'react-router';
import React from 'react';
import Header from './components/Header/Header';
import Catalog from './routes/Catalog/Catalog';
import Checkout from './routes/Checkout/Checkout';

function App() {

  return (

      <div className="App">
        {/* Header */}
        <Header/>
        <Switch>
          {/* Catalog */}
          <Route exact path="/" component={Catalog}/>
          {/* Checkout */}
          <Route path="/checkout" component={Checkout}/>
        </Switch>
      </div>

  );
}

export default App;
