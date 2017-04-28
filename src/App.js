import React, { Component } from 'react';

import Header from './components/header/header/header.component';
import Landing from './components/body/landing/landing.component';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Landing />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
