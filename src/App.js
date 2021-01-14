import React from 'react';

import AboutContainer from './containers/AboutContainer';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';

import SiteNavigation from './components/SiteNavigation';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
      <Router>
          <SiteNavigation />
          <Switch>
            <Route path="/HomeContainer">
              <HomeContainer />
            </Route>
            <Route path="/AboutContainer">
              <AboutContainer />
            </Route>
            <Route path="/ContactContainer">
              <ContactContainer />
            </Route>
          </Switch>
      </Router>
    
  )
};

export default App;