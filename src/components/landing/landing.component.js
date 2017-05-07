import React from 'react';

import Topics from './topic-list/topic.list.component.js'
import AddTopic from './topic-list/new-topic/new.topic.component';
import Header from '../header/header.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Landing = ({ topics, actions }) => {
  return (
    <div>
        <MuiThemeProvider>
          <div>
            <Header />
            <AddTopic
              addTopic={actions.topics.addTopic}/>
            <Topics
              topics={topics.topics}
              getTopics={actions.topics.getTopics}
              loadTopics={actions.topics.loadTopics}
              loadNewTopics={actions.topics.loadNewTopic}
            />
          </div>
        </MuiThemeProvider>
    </div>
  )
}

export default Landing;
