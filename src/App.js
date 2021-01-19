import React from 'react';

import GlobalStyle from './components/GlobalStyles'

import HomeContainer from './containers/HomeContainer/index';
import AboutContainer from './containers/AboutContainer/index';
import ContactContainer from './containers/ContactContainer';
import BlogListContainer from './containers/BlogListContainer';
import BlogPostContainer from './containers/BlogPostContainer'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/about" component={AboutContainer} />
          <Route path="/contact" component={ContactContainer} />
          <Route path="/blog/:slug" component={BlogPostContainer} />
          <Route path="/blog" component={BlogListContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;