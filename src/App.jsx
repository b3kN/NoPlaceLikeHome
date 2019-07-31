import React from 'react';
import { hot } from 'react-hot-loader';
import './assets/scss/App';
import Header from 'components/Header';
import Welcome from 'components/Welcome';

const App = () => (
  <content>
    <app>
      <Header title="No Place Like Home" />
      <Welcome />
    </app>
  </content>
);

export default hot(module)(App);
