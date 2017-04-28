import React from 'react';

import Topics from './topic-list/topic.list.component.js'
import AddTopic from './topic-list/new-topic/new.topic.component';

const Landing = () => (
  <div>
      <AddTopic />
      <Topics />
  </div>
)

export default Landing;
