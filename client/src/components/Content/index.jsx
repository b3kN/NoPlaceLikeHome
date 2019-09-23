import React from "react";

import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';

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