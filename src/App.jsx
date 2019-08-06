import React from 'react';
import { hot } from 'react-hot-loader';

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

import './assets/styles/App';

const App = () => (
  <div className="application">
    <Header title="No Place Like Home" />
    <Content />
    <Footer />
  </div>
);

export default hot(module)(App);
