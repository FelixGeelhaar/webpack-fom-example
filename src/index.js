import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import Container from './Layout/container';
import Home from './Home';

const routes = {
  path: "/",
  component: Container,
  indexRoute: { component: Home }
};

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);
