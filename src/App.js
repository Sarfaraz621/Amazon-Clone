import React from 'react'
import Header from './Header';
import "./App.css"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Home';
import Checkout from './Checkout';
import Ordered from './Ordered';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Checkout/>
        </Route> 
        <Route path="/ordered">
          <Ordered/>
        </Route>      
        <Route path="/">
          <Header/>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
