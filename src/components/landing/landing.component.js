import React from 'react';

import Topics from './topic-list/topic.list.component.js'
import AddTopic from './topic-list/new-topic/new.topic.component';
import Header from '../header/header.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Landing = () => (
  <div>
      <MuiThemeProvider>
        <div>
          <Header />
          <AddTopic />
          <Topics />
        </div>
      </MuiThemeProvider>
  </div>
)

export default Landing;
