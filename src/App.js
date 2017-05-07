import React from 'react';

import Landing from './components/landing/landing.component';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from './redux/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Landing} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
