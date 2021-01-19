import React from 'react';

import HomeContainer from './containers/HomeContainer/index';
import AboutContainer from './containers/AboutContainer/index';
import ContactContainer from './containers/ContactContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <AboutContainer />
          </Route>
          <Route path="/contact">
            <ContactContainer />
          </Route>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;