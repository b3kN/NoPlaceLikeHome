import React from "react";

import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';

import './Content';

const Content = () => (
  <content id="contentWrapper">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </content>
);

export default Content;